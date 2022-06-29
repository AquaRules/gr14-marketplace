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
        const { name, address } = JSON.parse(req.body);
        await userRecord.create({
          name: name,
          address: address,
        });
        res.status(201).json({
          success: true,
          message: 'Successfully created user!',
        });
      } catch (error: any) {
        const { address } = JSON.parse(req.body);
        const mq = await userRecord.findOne({ address });
        res.status(200).json({
          success: true,
          message: mq.name,
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
