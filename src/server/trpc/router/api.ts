import { z } from "zod";

import type { NextApiRequest, NextApiResponse } from "next";
import { router, publicProcedure } from "../trpc";


// super basic api example
export const apiRouter = router({
  example: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
			return {
        greeting: `Hello from ${input?.text ?? "tRPC"}`,
      };
    }),


  header: publicProcedure
    .query(() => {
			return {
        msg: `API Responses 🌐`,
      };
    }),
});





