import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigpaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigpaths()
  ],
})
