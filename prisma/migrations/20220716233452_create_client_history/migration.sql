-- CreateEnum
CREATE TYPE "HistoryType" AS ENUM ('DEPOSIT', 'WITHDRAWAL');

-- CreateTable
CREATE TABLE "clients_history" (
    "history_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "HistoryType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "clients_history_pkey" PRIMARY KEY ("history_id")
);

-- AddForeignKey
ALTER TABLE "clients_history" ADD CONSTRAINT "clients_history_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
