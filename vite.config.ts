import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import {
    createStyleImportPlugin,
    ElementPlusResolve,
  } from 'vite-plugin-style-import'
  
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/global.less')}";`,
                javascriptEnabled: true,
            },
        },
    },
    plugins: [vue(),createStyleImportPlugin({
        resolves:[
            ElementPlusResolve()
        ],
        libs: [
            // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
            {
                libraryName: 'element-plus',
                esModule: true,
                resolveStyle: (name) => {
                    return `element-plus/lib/theme-chalk/${name}.css`
                },
                ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
            },
        ],
    })],
})
