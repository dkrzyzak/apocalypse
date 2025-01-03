import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: 'dist',
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				common: resolve(__dirname, 'src/common.ts'),
				react: resolve(__dirname, 'src/react.ts'),
			},
			formats: ['es'],
			fileName: (_format, entryName) => `${entryName}.js`,
		},
		terserOptions: {
			mangle: false,
		},
		minify: 'terser',
		rollupOptions: {
			external: [...builtinModules, /^node:.*/, 'eslint', 'typescript-eslint'],
		},
	},
	plugins: [
		dts({
			include: ['src/index.ts', 'src/common.ts', 'src/react.ts'],
			entryRoot: 'src',
		}),
	],
});
