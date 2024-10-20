import { z } from "zod";
import { procedure, router } from "../trpc";

export const exampleRouter = router({
  getName: procedure
    .input(z.object({ firstName: z.string(), lastName: z.string() }))
    .query((opts) => {
    //   console.log(opts.ctx.req);

      return {
        fullName: `${opts.input.firstName} ${opts.input.lastName}`,
      };
    }),
});

export type ExampleRouter = typeof exampleRouter;
