import globals from 'globals';
import type { Linter } from 'eslint';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
// import pluginImport from './patched-plugin-import';

// COMMON = JS + TS + IMPORTS

const config: Linter.Config[] = [
	js.configs.recommended,
	// pluginImport.flatConfigs.recommended,
	...(tseslint.configs.recommended as Linter.Config[]),
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser as Linter.Parser,
			globals: {
				...globals.browser,
				...globals.commonjs,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		settings: {
			'import/internal-regex': '^~/',

			'import/resolver': {
				node: {
					extensions: ['.ts', '.tsx'],
				},

				typescript: {
					alwaysTryTypes: true,
				},
			},
		},

		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'no-empty-pattern': 'warn',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],
		},
	},
];

export default config;
