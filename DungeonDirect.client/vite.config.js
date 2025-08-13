import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import path from 'path'
import { fileURLToPath } from 'url';

export default defineConfig({
    plugins: [
        react(),
        mkcert()
    ],
    server: {
        port: 5173,
        https: true
    },

    resolve: {
    alias: {
      src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    },
}
});
