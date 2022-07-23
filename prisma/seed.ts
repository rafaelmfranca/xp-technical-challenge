import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.client.createMany({
    data: [
      { email: 'cliente@xp.com', password: '12345678' },
      { email: 'cliente@clear.com', password: '12345678' },
      { email: 'cliente@rico.com', password: '12345678' },
    ],
  });

  await prisma.availableAssets.createMany({
    data: [
      { ticker: 'ABEV3', variation: -0.1, amount: 200, unitPrice: 14.43 },
      { ticker: 'PETR4', variation: 0.64, amount: 200, unitPrice: 28.63 },
      { ticker: 'AMER3', variation: 0.6, amount: 180, unitPrice: 15.9 },
      { ticker: 'AZUL4', variation: -0.16, amount: 140, unitPrice: 12.09 },
      { ticker: 'VALE3', variation: 0.36, amount: 1400, unitPrice: 69.09 },
      { ticker: 'CIEL3', variation: 0.12, amount: 2400, unitPrice: 4.19 },
      { ticker: 'CMIG4', variation: -0.1, amount: 400, unitPrice: 10.36 },
      { ticker: 'BBAS3', variation: 0.47, amount: 251, unitPrice: 33.85 },
      { ticker: 'CVCB3', variation: -0.07, amount: 151, unitPrice: 6.46 },
      { ticker: 'ELET3', variation: 0.2, amount: 280, unitPrice: 44.63 },
      { ticker: 'BBDC4', variation: -0.3, amount: 135, unitPrice: 17.05 },
      { ticker: 'B3SA3', variation: -0.35, amount: 300, unitPrice: 10.72 },
      { ticker: 'ITUB4', variation: 0.1, amount: 670, unitPrice: 23.26 },
      { ticker: 'LREN3', variation: -0.2, amount: 168, unitPrice: 24.42 },
      { ticker: 'RENT3', variation: 0.3, amount: 850, unitPrice: 55.42 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
