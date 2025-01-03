import type { Rule } from 'eslint';
import pluginImportOriginal from 'eslint-plugin-import';

// no-unused-modules rule cause build-time error with vite, so for now I just remove it from rules

export default {
	...pluginImportOriginal,
	rules: {
		...pluginImportOriginal.rules,
		'no-unused-modules': undefined as unknown as Rule.RuleModule,
	} as Record<string, Rule.RuleModule>,
};
