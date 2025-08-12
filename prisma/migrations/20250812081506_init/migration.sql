/*
  Warnings:

  - Added the required column `kimga` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "kimga" TEXT NOT NULL,
ADD COLUMN     "sotildimi" BOOLEAN NOT NULL DEFAULT false;
