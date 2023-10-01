import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    mockServer({
      logLevel: 'info',
      urlPrefixes: ['/api/'],
      mockRootDir: './mock-api',
      mockJsSuffix: '.mock.js',
      mockTsSuffix: '.mock.ts',
      noHandlerResponse404: true,
      mockModules: [],
      middlewares: []    
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
