import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { assetId, saleQuantity, clientId } = req.body;

  const client = await prisma.client.findFirst({
    where: { clientId },
  });

  const asset = await prisma.availableAssets.findFirst({
    where: { assetId },
  });

  const balance = Number(client?.balance) + Number(asset?.unitPrice) * saleQuantity;
  const updatedAssetAmount = Number(asset?.amount) + saleQuantity;

  const response = await prisma.client.update({
    where: { clientId },
    data: {
      balance,
      transactions: { create: { assetId, amount: -saleQuantity } },
    },
  });

  const updatedAsset = await prisma.availableAssets.update({
    where: { assetId },
    data: { amount: updatedAssetAmount },
  });

  res.json({ balance: response.balance, updatedAsset });
}
