import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src', // Set root to 'src' if index.html is in 'src'
  base: '/pokemon/', // Adjust if necessary
})
