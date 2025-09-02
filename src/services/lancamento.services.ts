import { prisma } from "../config/config.prisma";
import { ILancamento } from "../models/lancamento.model";

export class LancamentoServices {
  async createLancamento(lancamentoData: ILancamento) {
    return await prisma.lancamento.create({ data: lancamentoData });
  }
  async getLancamentoByUserId(userId: string, ano?: string, mes?: string) {
    if (!ano || !mes) {
      // Se não mandou ano ou mês, retorna tudo do usuário
      return await prisma.lancamento.findMany({
        where: { userId },
      });
    }

    // Normaliza o mês para sempre ter 2 dígitos (01, 02, ..., 12)
    const mesFormatado = mes.padStart(2, "0");

    // Monta prefixo yyyy-mm
    const prefixo = `${ano}-${mesFormatado}`;

    return await prisma.lancamento.findMany({
      where: {
        userId,
        data: {
          startsWith: prefixo,
          // Exemplo: "2025-09" → pega só setembro de 2025
        },
      },
    });
  }

  async deleteLancamento(lancamentoId: string) {
    return await prisma.lancamento.delete({ where: { id: lancamentoId } });
  }
}
