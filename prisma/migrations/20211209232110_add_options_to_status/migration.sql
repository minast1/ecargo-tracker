/*
  Warnings:

  - The values [EXCEPTION] on the enum `Order_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [EXCEPTION] on the enum `Tracker_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `status` ENUM('INFO_RECIEVED', 'PENDING', 'IN_TRANSIT', 'DELIVERED', 'SHIPPED', 'RETURNED', 'PICK_UP', 'FAIL_ATTEMPT') NOT NULL DEFAULT 'INFO_RECIEVED';

-- AlterTable
ALTER TABLE `Tracker` MODIFY `status` ENUM('INFO_RECIEVED', 'PENDING', 'IN_TRANSIT', 'DELIVERED', 'SHIPPED', 'RETURNED', 'PICK_UP', 'FAIL_ATTEMPT') NOT NULL DEFAULT 'INFO_RECIEVED';
