import { TipoLancamentoEnum } from "@prisma/client";

export interface ILancamento {
  descricao: string;
  valor: number;
  tipo: TipoLancamentoEnum;
  data: string;
  userId: string;
}
