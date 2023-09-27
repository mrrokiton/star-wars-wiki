import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			all: true,
			exclude: [...configDefaults.exclude, 'src/**/*-types.ts'],
		},
	},
});
