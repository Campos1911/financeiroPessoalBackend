import { FastifyReply, FastifyRequest } from "fastify";
import { LancamentoServices } from "../services/lancamento.services";
import {
  lancamentoParamsSchema,
  lancamentoSchema,
} from "../validators/lancamento.validators";
import { z } from "zod";

export class LancamentoControllers {
  private lancamentoService = new LancamentoServices();

  async createLancamento(
    req: FastifyRequest<{ Body: z.infer<typeof lancamentoSchema> }>,
    reply: FastifyReply
  ) {
    try {
      const parsed = lancamentoSchema.safeParse(req.body);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Erro de validação",
          errors: z.treeifyError(parsed.error),
        });
      }

      const lancamento = parsed.data;
      const newLancamento = await this.lancamentoService.createLancamento(
        lancamento
      );

      return reply.status(201).send({
        message: "Lançamento registrado com sucesso",
        data: newLancamento,
      });
    } catch (error) {
      return reply.status(500).send({
        message: "Erro interno no servidor",
      });
    }
  }

  async getLancamentoByUserId(
    req: FastifyRequest<{ Params: z.infer<typeof lancamentoParamsSchema> }>,
    reply: FastifyReply
  ) {
    try {
      const parsed = lancamentoParamsSchema.safeParse(req.params);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Erro de validação",
          errors: z.treeifyError(parsed.error),
        });
      }

      const { id } = parsed.data;

      const lancamentos = await this.lancamentoService.getLancamentoByUserId(
        id
      );

      return reply.status(200).send({
        message: "Lançamentos encontrados",
        data: lancamentos,
      });
    } catch (error) {
      return reply.status(500).send({
        message: "Erro interno no servidor",
      });
    }
  }

  async deleteLancamento(
    req: FastifyRequest<{ Params: z.infer<typeof lancamentoParamsSchema> }>,
    reply: FastifyReply
  ) {
    try {
      const parsed = lancamentoParamsSchema.safeParse(req.params);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Erro de validação",
          errors: z.treeifyError(parsed.error),
        });
      }

      const { id } = parsed.data;

      await this.lancamentoService.deleteLancamento(id);

      return reply.status(200).send({
        message: "Lançamento deletado",
      });
    } catch (error) {
      return reply.status(500).send({
        message: "Erro interno no servidor",
      });
    }
  }
}
