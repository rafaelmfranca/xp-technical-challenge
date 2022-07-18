import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { email } = req.body;

  const balance = await prisma.client.findFirst({
    where: { email },
    select: { balance: true },
  });

  const accountHistory = await prisma.clientHistory.findMany({
    orderBy: { createdAt: 'desc' },
    where: { client: { email } },
  });

  res.json({ accountHistory, ...balance });
}
