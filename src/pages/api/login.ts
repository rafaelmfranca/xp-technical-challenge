import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { email, password } = req.body;

  const user = await prisma.client.findFirst({
    where: { email, password },
  });

  if (!user) {
    return res.json({ error: 'E-mail ou senha inválidos' });
  }

  return res.json({ clientId: user.clientId, email });
}
