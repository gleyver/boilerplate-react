import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  // Carrega as variáveis do .env de acordo com o modo (development, production, etc)
  const env = loadEnv(mode, process.cwd(), '')

  const enableVisualizer = env.VITE_VISUALIZER === 'true'

  return {
    plugins: [
      react(),
      enableVisualizer && visualizer({ open: false }),
      tailwindcss(),
      tsconfigPaths(),
    ].filter(Boolean),
  }
})
