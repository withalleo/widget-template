import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { manifestTransformer } from "./manifest-transformer";
// @ts-ignore
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      alleo: path.resolve(__dirname, "alleo.d.ts"),
      alleoWidgetUtils: path.resolve(
        __dirname,
        "lib/alleoWidgetUtils.ts"
      ),
    },
  },
  build: {
    polyfillModulePreload: false,
  },
  plugins: [
    viteSingleFile(),
    viteStaticCopy({
      targets: [manifestTransformer],
    }),
  ],
});
