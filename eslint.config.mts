// eslint.config.mts

import jseslint from "@eslint/js"; // Official ESLint JS configs
import tseslint from "typescript-eslint"; // TypeScript ESLint plugin & configs
import globals from "globals"; // Environment global variable definitions
import eslintConfigPrettier from "eslint-config-prettier/flat"; // Prettier disables conflicting ESLint formatting rules

// Export ESLint's flat config array using typescript-eslint's config helper
export default tseslint.config([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], // Lint these file extensions
    ignores: ["*.config.mts"], // Ignore ESLint config file itself
    languageOptions: {
      globals: globals.node, // Use Node.js globals. (globals.node = process, __dirname, module, require, etc.)
    },
  },
  jseslint.configs.recommended, // Recommended JavaScript rules
  ...tseslint.configs.recommended, // Recommended TypeScript rules. Spread because it's an array of config objects.
  eslintConfigPrettier, // Disable ESLint rules that conflict with Prettier formatting
]);
