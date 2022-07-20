import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { assetId } = req.query as { assetId: string };

  const asset = await prisma.availableAssets.findFirst({
    where: { assetId },
  });

  res.json(asset);
}
