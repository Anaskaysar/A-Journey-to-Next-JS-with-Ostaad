/*
  Warnings:

  - You are about to alter the column `col4` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `col5` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `dateTime` MODIFY `col4` TIMESTAMP NOT NULL,
    MODIFY `col5` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `boolean` (
    `id` INTEGER NOT NULL,
    `col1` BOOLEAN NOT NULL,
    `col2` CHAR(100) NOT NULL,

    UNIQUE INDEX `boolean_col2_key`(`col2`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
