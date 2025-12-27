import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock' // 引入 mock 插件

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            mockPath: 'mock', // mock文件目录
            localEnabled: true, // 开发环境启用
            prodEnabled: false, // 生产环境禁用
        }),
    ], // 启用 Vue 插件以支持 .vue 文件
    server: {
        port: 8080, // 固定端口
        open: true, // 自动打开浏览器
        proxy: {
            // API代理
            '/api': {
                target: 'http://your-api-server',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    test: {
        globals: true, // 启用 describe, it, expect 等全局 API
        environment: 'happy-dom', // 或 'jsdom'，用于模拟浏览器环境
        // 支持测试文件中的 TypeScript
        transformMode: {
            web: [/\.[jt]sx?$/],
        },
    },
})
