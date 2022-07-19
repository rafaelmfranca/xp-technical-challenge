import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(_req: Req, res: Res) {
  res.end();
}
