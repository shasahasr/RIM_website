import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	// Base public path when served in development or production.
	base: './',
	build: {
		outDir: 'dist',
		assetsDir: 'assets'
	},
	server: {
		open: true
	}
});
