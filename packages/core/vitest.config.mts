import { createVitestConfig } from "@neumorph-ui/config/vitest";

export default createVitestConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
});
