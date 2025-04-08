import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: true, // Automatically opens the app in the browser
    },
    resolve: {
        alias: {
            '@': '/src', // Optional: Add an alias for the src folder
        },
    },
});