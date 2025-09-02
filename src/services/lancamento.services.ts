import { prisma } from "../config/config.prisma";
import { ILancamento } from "../models/lancamento.model";

export class LancamentoServices {
  async createLancamento(lancamentoData: ILancamento) {
    return await prisma.lancamento.create({ data: lancamentoData });
  }
  async getLancamentoByUserId(userId: string) {
    return await prisma.lancamento.findMany({ where: { userId } });
  }
  async deleteLancamento(lancamentoId: string) {
    return await prisma.lancamento.delete({ where: { id: lancamentoId } });
  }
}
