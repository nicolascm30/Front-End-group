import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import typescriptParser from "@typescript-eslint/parser"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"

export default [
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules
    }
  },
  {
    ignores: ["node_modules/", "dist/", ".astro/", ".amplify-hosting/", "_astro/"]
  }
]
