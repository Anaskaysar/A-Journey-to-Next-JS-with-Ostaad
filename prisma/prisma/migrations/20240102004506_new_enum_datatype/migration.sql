/*
  Warnings:

  - You are about to drop the column `remarks` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `remarks`;

-- CreateTable
CREATE TABLE `useWithEnum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `remarks` ENUM('New', 'Existing', 'VIP', 'Regular', 'Bad') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
