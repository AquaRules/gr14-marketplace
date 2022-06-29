import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongo';
import nftData from '../../models/nftData';

import config from '../../config.json';
import { ethers } from 'ethers';

export type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      try {
        const { name, image_url, chain, selling_price, lend_price, txHash } =
          JSON.parse(req.body);
        const provider = new ethers.providers.JsonRpcProvider(
          config[chain.toString()]
        );
        const receipt = await provider.getTransactionReceipt(txHash);
        console.log({ receipt });
        const tokenId = '1';
        await nftData.create({
          name: name,
          image_url,
          chain,
          selling_price,
          lend_price,
          tokenId,
        });
        res.status(201).json({
          success: true,
          message: 'Successfully created user!',
        });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: `Error: ${error}`,
        });
      }
      break;
    default:
      res.status(500).json({
        success: false,
        message: "Couldn't submit, please try again!",
      });
      break;
  }
}
