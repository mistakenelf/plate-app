import { NowRequest, NowResponse } from '@vercel/node';

export default function (_req: NowRequest, res: NowResponse) {
  res.send('Healthy');
}
