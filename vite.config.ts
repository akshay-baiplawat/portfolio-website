import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/portfolio-website/',
    root: '.',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        },
        minify: 'terser'
    },
    server: {
        port: 3000,
        open: true,
        host: true
    },
    preview: {
        port: 8080
    },
    css: {
        devSourcemap: true,
        postcss: './postcss.config.js'
    },
    optimizeDeps: {
        include: ['bootstrap']
    }
});
