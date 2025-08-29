/*
  Warnings:

  - You are about to drop the `Lancamentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Lancamentos`;

-- CreateTable
CREATE TABLE `Lancamento` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `valor` INTEGER NOT NULL,
    `tipo` ENUM('entrada', 'saida') NOT NULL,
    `data` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Lancamento_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
