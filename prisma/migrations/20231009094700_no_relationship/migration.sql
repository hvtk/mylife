/*
  Warnings:

  - You are about to drop the column `userId` on the `InfoPerson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `InfoPerson` DROP FOREIGN KEY `InfoPerson_userId_fkey`;

-- AlterTable
ALTER TABLE `InfoPerson` DROP COLUMN `userId`;
