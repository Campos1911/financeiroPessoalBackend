import { z } from "zod";

export const TipoLancamentoEnum = z.enum(["entrada", "saida"]);

export const lancamentoSchema = z.object({
  descricao: z.string().min(1, "Descrição obrigatória"),
  valor: z.number().int("Precisa ser inteiro"),
  tipo: TipoLancamentoEnum,
  userId: z.uuid(),
  data: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data inválida (use formato válido ex: 2025-08-29)",
  }),
});

export const lancamentoParamsSchema = z.object({
  id: z.uuid("O parâmetro 'id' deve ser um UUID válido"),
});

export type LancamentoInput = z.infer<typeof lancamentoSchema>;
export type LancamentoParam = z.infer<typeof lancamentoParamsSchema>;
