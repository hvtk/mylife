/*
  Warnings:

  - Added the required column `autherId` to the `InfoPerson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `InfoPerson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InfoPerson` ADD COLUMN `autherId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `InfoPerson` ADD CONSTRAINT `InfoPerson_autherId_fkey` FOREIGN KEY (`autherId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
