import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongo';
import userRecord from '../../models/userRecord';

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
        const {
          name,
          image_url,
          chain,
          selling_price,
          lend_price,
          txHash,
          chainId,
        } = JSON.parse(req.body);
        // await userRecord.create({
        //   name: name,
        //   address: address,
        // });
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
