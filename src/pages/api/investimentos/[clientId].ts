import { toJson } from '@/helpers/toJson';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const { clientId } = req.query as { clientId: string };

  const rawInvestments = await prisma.$queryRaw`SELECT
    aa.asset_id AS "assetId",
    aa.ticker,
    aa.variation,
    sum(tr.amount) AS amount,
    aa.unit_price AS "unitPrice"
  FROM
    transactions AS tr
    INNER JOIN clients AS cl ON cl.client_id = tr.client_id
    INNER JOIN available_assets AS aa ON aa.asset_id = tr.asset_id
  WHERE
    cl.client_id = ${clientId}
  GROUP BY
    aa.asset_id
  HAVING sum(tr.amount) > 0;
  `;

  const investments = JSON.parse(toJson(rawInvestments));

  res.json(investments);
}
