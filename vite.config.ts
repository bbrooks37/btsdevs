// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Use standard plugin instead of SWC
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
