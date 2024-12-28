import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expression": "error",
      "no-console": "warn",
      "no-undef": "error",
      "prefer-const": "error",
    },
    globals:{
      "process":"readonly"
    }
  },
  {
    ignores: ["node_modules/*"]
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
