/*
  Warnings:

  - You are about to alter the column `col4` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `col5` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `StringText` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `dateTime` MODIFY `col4` TIMESTAMP NOT NULL,
    MODIFY `col5` DATETIME NOT NULL;

-- DropTable
DROP TABLE `StringText`;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stringText` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` VARCHAR(191) NOT NULL,
    `col2` VARCHAR(191) NULL,
    `col3` VARCHAR(191) NOT NULL DEFAULT 'Bangladesh',
    `col4` VARCHAR(1000) NOT NULL,
    `col5` TINYTEXT NOT NULL,
    `col6` TEXT NOT NULL,
    `col7` LONGTEXT NOT NULL,
    `col8` MEDIUMTEXT NOT NULL,
    `numbersID` INTEGER NOT NULL,

    UNIQUE INDEX `stringText_numbersID_key`(`numbersID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stringText` ADD CONSTRAINT `stringText_numbersID_fkey` FOREIGN KEY (`numbersID`) REFERENCES `numbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
