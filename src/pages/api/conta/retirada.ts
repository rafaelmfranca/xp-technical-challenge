import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { clientId, type, amount } = req.body;

  const user = await prisma.client.findFirst({
    where: { clientId },
  });

  const balance = Number(user?.balance) - amount;

  const response = await prisma.client.update({
    where: { clientId },
    data: { balance, clientHistory: { create: { type, amount } } },
  });

  res.json(response);
}
