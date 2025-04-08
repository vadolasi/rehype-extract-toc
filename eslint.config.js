import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import gitignore from "eslint-config-flat-gitignore";
import prettier from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-n";
import importSortPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
	gitignore({ strict: false }),
	{
		languageOptions: {
			ecmaVersion: 2021,
			globals: globals.nodeBuiltin,
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	},
	js.configs.recommended,
	{
		plugins: {
			"simple-import-sort": importSortPlugin,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	nodePlugin.configs["flat/recommended-module"],
	prettier,
]);
