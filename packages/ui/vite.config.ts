import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
      cleanVueFileName: true,
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
  ],
  build: {
    lib: {
      entry: {
        KoiUi: './src/components/index.ts',
        ProTable: './src/components/ProTable/index.ts',
      },
      name: 'KoiUI',
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖
        // 提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
