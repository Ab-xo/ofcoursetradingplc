
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react()],
  build: {
    outDir: 'dist', // ✅ Needed by Render
  },
    server: {
      port: 5173,
    },
})

