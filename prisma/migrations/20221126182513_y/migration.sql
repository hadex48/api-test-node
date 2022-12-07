/*
  Warnings:

  - You are about to drop the column `userId` on the `UpdatePoint` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_userId_fkey";

-- AlterTable
ALTER TABLE "UpdatePoint" DROP COLUMN "userId";
