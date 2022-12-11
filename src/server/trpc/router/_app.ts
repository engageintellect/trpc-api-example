import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { apiRouter } from "./api";

export const appRouter = router({
  example: exampleRouter,
  api: apiRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
