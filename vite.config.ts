import { defineConfig, type UserConfigExport, type ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from "path";

import {
  root,
  alias,
  wrapperEnv,
  pathResolve,
  __APP_INFO__
} from "./build/utils";




export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } =
    wrapperEnv(loadEnv(mode, root));

  return {
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
    }
  };
}
