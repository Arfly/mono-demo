import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  build: {
    outDir: '../../dist/apps/app/dist',
  },
});
