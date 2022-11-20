import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// 根目录
const rootDir = path.resolve(__dirname, './');

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls);
}

// 打包后的目录
const outDir = resolve('packages/lib');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve('src/editor/index.ts'),
      name: 'Vusui', // UMD 包实例名称
      fileName: (format) => `vusui-editor.${format}.js`
    },
    outDir,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
