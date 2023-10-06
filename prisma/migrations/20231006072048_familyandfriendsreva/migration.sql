/*
  Warnings:

  - You are about to drop the column `authorId` on the `InfoPerson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `InfoPerson` DROP FOREIGN KEY `InfoPerson_authorId_fkey`;

-- AlterTable
ALTER TABLE `InfoPerson` DROP COLUMN `authorId`;
