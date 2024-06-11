import { defineConfig, type ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from "path";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      '@': '/src',
			'~': '/src/assets'
      // "@": path.resolve(__dirname, "src"),
    },
  },
  // 服务端渲染
  server: {
    // 端口号
    port: 3000,
    host: "0.0.0.0",
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {},
  },
})
