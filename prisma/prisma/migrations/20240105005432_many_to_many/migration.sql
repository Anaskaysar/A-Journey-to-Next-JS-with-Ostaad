/*
  Warnings:

  - You are about to alter the column `col4` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `col5` on the `dateTime` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `dateTime` MODIFY `col4` TIMESTAMP NOT NULL,
    MODIFY `col5` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,
    `postID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_postID_fkey` FOREIGN KEY (`postID`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
