import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11Y from 'eslint-plugin-jsx-a11y';
import { Linter } from 'eslint';

const reactFlatConfig = pluginReact.configs.flat!;

const config: Linter.Config[] = [
	{
		files: ['**/*.{ts,tsx}'],

		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHooks,
			'jsx-a11y': pluginJsxA11Y,
		},

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
				version: '19',
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
			...pluginJsxA11Y.flatConfigs.recommended.rules,
			...reactFlatConfig.recommended.rules,
			...reactFlatConfig['jsx-runtime'].rules,
			...pluginReactHooks.configs.recommended.rules,

			// custom overrides
			'react/prop-types': 'off',
		},
	},
];

export default config;
