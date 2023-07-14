import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    vue(),
  ],
  build: {
    lib: {
      entry: './src/component.ts',
      name: 'Test',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: '../../dist/packages/Test/dist',
  },
});
