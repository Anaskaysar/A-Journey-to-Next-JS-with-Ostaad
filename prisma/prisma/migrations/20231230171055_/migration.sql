/*
  Warnings:

  - Added the required column `remarks` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `remarks` ENUM('New', 'Existing', 'VIP', 'Regular', 'Bad') NOT NULL;
