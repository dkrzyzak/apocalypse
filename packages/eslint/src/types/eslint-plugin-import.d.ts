import type { Rule, Linter } from 'eslint';

// based on https://github.com/import-js/eslint-plugin-import/blob/main/src/index.js

declare module 'eslint-plugin-import' {
	export const rules: Record<string, Rule.RuleModule>;

	export const configs: {
		recommended: Linter.Config;
		errors: Linter.Config;
		warnings: Linter.Config;
		'stage-0': Linter.Config;
		react: Linter.Config;
		'react-native': Linter.Config;
		electron: Linter.Config;
		typescript: Linter.Config;
	};

	export const flatConfigs: {
		recommended: Linter.Config;
		errors: Linter.Config;
		warnings: Linter.Config;
		react: Linter.Config;
		'react-native': Linter.Config;
		electron: Linter.Config;
		typescript: Linter.Config;
	};

	export default { rules, configs, flatConfigs };
}
