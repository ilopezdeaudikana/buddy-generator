import { fileURLToPath } from 'node:url'
import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default 
  defineConfig({
    plugins: [
      vue()
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*', 'mock-api/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })

