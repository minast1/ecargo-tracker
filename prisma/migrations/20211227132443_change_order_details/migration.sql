/*
  Warnings:

  - You are about to drop the column `email` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Enum("Order_status")` to `Enum("Order_status")`.
  - You are about to alter the column `status` on the `Tracker` table. The data in that column could be lost. The data in that column will be cast from `Enum("Tracker_status")` to `Enum("Tracker_status")`.
  - Added the required column `address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Order_email_key` ON `Order`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `email`,
    ADD COLUMN `address` VARCHAR(50) NOT NULL,
    ADD COLUMN `name` VARCHAR(50) NOT NULL,
    MODIFY `status` ENUM('PACKAGE_RECIEVED', 'PENDING', 'IN_TRANSIT', 'ARRIVED_AT_DESTINATION', 'DELIVERED', 'SHIPPED', 'RETURNED', 'PICK_UP') NOT NULL DEFAULT 'PACKAGE_RECIEVED';

-- AlterTable
ALTER TABLE `Tracker` MODIFY `status` ENUM('PACKAGE_RECIEVED', 'PENDING', 'IN_TRANSIT', 'ARRIVED_AT_DESTINATION', 'DELIVERED', 'SHIPPED', 'RETURNED', 'PICK_UP') NOT NULL DEFAULT 'PACKAGE_RECIEVED';
