import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11Y from 'eslint-plugin-jsx-a11y';
import { Linter } from 'eslint';

const reactFlatConfig = pluginReact.configs.flat!;

const compat = new FlatCompat();

const config: Linter.Config[] = [
	pluginJsxA11Y.flatConfigs.recommended,
	...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
	{
		files: ['**/*.{ts,tsx}'],

		plugins: { react: pluginReact },

		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				jsxPragma: null, // for @typescript/eslint-parser
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
			formComponents: ['Form'],
			linkComponents: [
				{
					name: 'Link',
					linkAttribute: 'to',
				},
				{
					name: 'NavLink',
					linkAttribute: 'to',
				},
			],
		},

		rules: {
			...reactFlatConfig.recommended.rules,
			...reactFlatConfig['jsx-runtime'].rules,
			'react/prop-types': 'off',
		},
	},
];

export default config;
