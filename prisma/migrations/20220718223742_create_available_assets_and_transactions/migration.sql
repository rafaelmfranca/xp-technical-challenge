-- CreateTable
CREATE TABLE "available_assets" (
    "asset_id" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "variation" DECIMAL(65,30) NOT NULL,
    "amount" INTEGER NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "available_assets_pkey" PRIMARY KEY ("asset_id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transaction_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(65,30) NOT NULL,
    "asset_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "available_assets_ticker_key" ON "available_assets"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_asset_id_key" ON "Transaction"("asset_id");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "available_assets"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;
