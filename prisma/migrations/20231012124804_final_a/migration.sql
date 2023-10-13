/*
  Warnings:

  - You are about to drop the column `autherId` on the `InfoPerson` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `InfoPerson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `InfoPerson` DROP FOREIGN KEY `InfoPerson_autherId_fkey`;

-- AlterTable
ALTER TABLE `InfoPerson` DROP COLUMN `autherId`,
    ADD COLUMN `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InfoPerson` ADD CONSTRAINT `InfoPerson_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
