import type { Rule, Linter } from 'eslint';


// based on https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js

declare module 'eslint-plugin-react-hooks' {
	export const rules: Record<string, Rule.RuleModule>;
	export const configs: {
		recommended: {
			plugins: ['react-hooks'];
			rules: {
				'react-hooks/rules-of-hooks': 'error';
				'react-hooks/exhaustive-deps': 'warn';
			};
		};
	};

    export default { rules, configs };
}
