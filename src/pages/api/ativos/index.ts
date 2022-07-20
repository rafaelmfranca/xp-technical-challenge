import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(_req: Req, res: Res) {
  const availableAssets = await prisma.availableAssets.findMany({
    where: { amount: { gte: 1 } },
  });

  res.json(availableAssets);
}
