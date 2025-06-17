import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: false }), tailwindcss()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@config': resolve(__dirname, 'src/config'),
      '@contexts': resolve(__dirname, 'src/contexts'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@domains': resolve(__dirname, 'src/domains'),
      '@user': resolve(__dirname, 'src/domains/user'),
      '@products': resolve(__dirname, 'src/domains/products'),
    },
  },
})
