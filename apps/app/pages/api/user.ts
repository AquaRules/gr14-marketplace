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
    case 'GET':
      try {
        const { address } = req.body;
        const result = await userRecord.findOne({ address });
        res.status(200).json({
          success: true,
          message: result,
        });
      } catch (error: any) {
        res.status(404).json({
          success: false,
          message: 'Not found!',
        });
      }
      break;
    case 'POST':
      try {
        const { name, address } = req.body;
        await userRecord.create({
          name,
          address,
        });
        res.status(201).json({
          success: true,
          message: 'Successfully created user!',
        });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: 'Already existing!',
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
