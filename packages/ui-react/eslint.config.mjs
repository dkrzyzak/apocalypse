import { commonConfig, reactConfig } from '@daniszczak/eslint';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginStorybook from 'eslint-plugin-storybook';


/** @type {import('eslint').Linter.Config}  */
export default [
	{
		ignores: ['**/dist', '**/.eslintrc.cjs'],
	},
	...commonConfig,
	...reactConfig,
    ...pluginStorybook.configs['flat/recommended'],
	{
		plugins: {
			'react-refresh': pluginReactRefresh,
		},

		rules: {
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
					allowExportNames: ['meta'],
				},
			],
		},
	},
];
