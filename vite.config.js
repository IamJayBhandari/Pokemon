
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output directory is `dist`
    rollupOptions: {
      input: '/index.html',  // Explicitly specify index.html for entry point
    },
  },
  base: './',  // Use relative paths for assets
});



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // Ensure the build output directory is `dist`
//     rollupOptions: {
//       input: './index.html', // Ensure this is correct for entry point
//     },
//     assetsDir: 'assets', // Ensure assets are correctly placed in the assets folder
//   },
//   base: '/', // Use relative paths for assets
// });
