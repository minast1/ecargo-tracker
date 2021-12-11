/*
  Warnings:

  - Made the column `message` on table `Tracker` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Tracker` MODIFY `message` VARCHAR(191) NOT NULL DEFAULT 'Tracking Information Recieved Successfully';
