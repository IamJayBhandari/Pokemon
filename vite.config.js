import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is correctly set
  build: {
    outDir: 'dist', // Output directory for build
  },
  base: '/', // Adjust if needed based on GitHub Pages setup
})
