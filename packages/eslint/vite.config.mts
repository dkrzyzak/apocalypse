import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: 'dist',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '@apocalypse/eslint',
			formats: ['es'],
			fileName: 'index',
		},
		terserOptions: {
			mangle: false,
		},
		minify: 'terser',
		rollupOptions: {
			external: [...builtinModules, /^node:.*/, 'eslint', 'typescript-eslint'],
			
			// output: {
				// preserveModules: true,
				// preserveModulesRoot: 'src',
				// chunkFileNames: `[name].js`,
			// },
		},
	},
	plugins: [
		dts({
			tsconfigPath: './tsconfig.json',
			rollupTypes: true, // Bundles all `.d.ts` files into one
		}),
	],
});
