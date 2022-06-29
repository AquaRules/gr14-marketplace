import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongo';
import userRecord from '../../../models/userRecord';

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
    case 'GET':
      try {
        const { address } = req.query;
        const mq = await userRecord.findOne({ address });
        res.status(200).json({
          success: true,
          message: mq.name,
        });
      } catch (error: any) {
        res.status(404).json({
          success: false,
          message: `Not Found! ${error}`,
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
