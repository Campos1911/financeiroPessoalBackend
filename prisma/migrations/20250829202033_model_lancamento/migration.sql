-- CreateTable
CREATE TABLE `Lancamentos` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `valor` INTEGER NOT NULL,
    `tipo` ENUM('entrada', 'saida') NOT NULL,
    `data` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Lancamentos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
