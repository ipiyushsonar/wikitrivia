import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  { ignores: [".next/", "out/"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs["flat/recommended"],
  ...[].concat(reactHooks.configs.flat.recommended),
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
    },
    settings: { react: { version: "detect" } },
    rules: { "@typescript-eslint/explicit-module-boundary-types": "off" },
  },
];
