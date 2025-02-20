import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electronVite from './electron-vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
  return {
    base: './',
    plugins: [vue(), electronVite({ mode })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
