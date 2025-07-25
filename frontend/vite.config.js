import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // 👈 this replaces 'dist'
  }
  server: {
    // This is used for local development only
    port: 5173,
  },
})
