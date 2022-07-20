import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { clientId } = req.query as { clientId: string };

  if (clientId) {
    const balance = await prisma.client.findFirst({
      where: { clientId },
      select: { balance: true },
    });

    const accountHistory = await prisma.clientHistory.findMany({
      orderBy: { createdAt: 'desc' },
      where: { clientId },
    });

    return res.json({ accountHistory, ...balance });
  }

  res.end();
}
