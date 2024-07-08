import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: 'tsconfig.lib.json',
			include: 'src/**/*.{ts,tsx}',
			exclude: ['src/**/*.(story|stories).{ts,tsx}', 'src/stories/**/*'],
		}),
	],
	resolve: {
		alias: {
			'~/': '/src/',
		},
	},
	build: {
		target: 'esnext',
		sourcemap: 'inline',
		minify: false,
		copyPublicDir: false,
		emptyOutDir: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'tailwindcss',
				'tailwind-merge',
			],
		},
	},
});
