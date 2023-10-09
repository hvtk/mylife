/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `InfoPerson` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `InfoPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InfoPerson` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `InfoPerson_userId_key` ON `InfoPerson`(`userId`);

-- AddForeignKey
ALTER TABLE `InfoPerson` ADD CONSTRAINT `InfoPerson_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
