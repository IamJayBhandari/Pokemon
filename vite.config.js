// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   root: '.', // Ensure the root is correctly set
//   build: {
//     outDir: 'dist', // Output directory for build
//   },
//   base: '/',
// })
// vite.config.js
export default {
  base: './', 
  build: {
    rollupOptions: {
      external: ['/assets/main.<hash>.js'],  // Replace <hash> with the actual hash if it's static
    }
  }
};
