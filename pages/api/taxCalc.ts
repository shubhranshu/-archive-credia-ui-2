// Up to $14,000	10.5%
// Over $14,000 and up to $48,000	17.5%
// Over $48,000 and up to $70,000	30%
// Over $70,000 and up to $180,000	33%
// Remaining income over $180,000	39%

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  debugger;
  res.status(200).json({ name: 'John Doe' });
}
