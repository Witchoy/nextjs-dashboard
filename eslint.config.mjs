import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".git/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]),
  prettier,
  {
    plugins: { prettier: pluginPrettier },
    rules: { "prettier/prettier": "error" },
  },
]);

export default eslintConfig;
