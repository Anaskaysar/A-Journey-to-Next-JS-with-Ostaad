-- CreateTable
CREATE TABLE `StringText` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` VARCHAR(191) NOT NULL,
    `col2` VARCHAR(191) NULL,
    `col3` VARCHAR(191) NOT NULL DEFAULT 'Bangladesh',
    `col4` VARCHAR(1000) NOT NULL,
    `col5` TINYTEXT NOT NULL,
    `col6` TEXT NOT NULL,
    `col7` LONGTEXT NOT NULL,
    `col8` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
