import { defineConfig, globalIgnores } from "eslint/config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintNextPlugin from "@next/eslint-plugin-next";
import * as mdx from "eslint-plugin-mdx";

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      next: eslintNextPlugin,
    },
    rules: {
      "react/no-unescaped-entities": "off",
    },
    settings: {
      next: {
        rootDir: ".",
      },
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  globalIgnores([
    "*.config.js",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".contentlayer/**",
    "node_modules/**",
    "dist/**",
  ]),
]);

export default eslintConfig;
