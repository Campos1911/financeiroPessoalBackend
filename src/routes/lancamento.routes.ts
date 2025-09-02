import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { LancamentoControllers } from "../controllers/lancamento.controllers";
import { z } from "zod";
import {
  lancamentoParamsSchema,
  lancamentoSchema,
} from "../validators/lancamento.validators";

export default async function LancamentoRoutes(app: FastifyInstance) {
  app.post(
    "/register",
    async (
      req: FastifyRequest<{ Body: z.infer<typeof lancamentoSchema> }>,
      reply: FastifyReply
    ) => {
      return new LancamentoControllers().createLancamento(req, reply);
    }
  );

  app.get(
    "/user/:id",
    async (
      req: FastifyRequest<{
        Params: z.infer<typeof lancamentoParamsSchema>;
        Querystring: { ano?: string; mes?: string };
      }>,
      reply: FastifyReply
    ) => {
      return new LancamentoControllers().getLancamentoByUserId(req, reply);
    }
  );

  app.delete(
    "/:id",
    async (
      req: FastifyRequest<{ Params: z.infer<typeof lancamentoParamsSchema> }>,
      reply: FastifyReply
    ) => {
      return new LancamentoControllers().deleteLancamento(req, reply);
    }
  );
}
