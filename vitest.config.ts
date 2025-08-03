/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/', 'dist/', '**/*.d.ts', '**/*.config.*', 'coverage/'],
            thresholds: {
                global: {
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    statements: 80
                }
            }
        },
        setupFiles: ['./src/test/setup.ts']
    }
});
