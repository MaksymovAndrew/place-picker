import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import immutablePlugin from "eslint-plugin-immutable";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      immutable: immutablePlugin,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
    },
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "import/no-unresolved": "warn",
      "no-undef": "warn",
      "immutable/no-mutation": "warn",
    },
  },
];
