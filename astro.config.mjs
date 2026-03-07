
import { defineConfig } from 'astro/config';

/* import data from "./OpenLinks.json"; */


import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

export default defineConfig({
  // Modern standard: explicitly define your production URL
// This tells Astro where the site is hosted
  site: 'https://harshiraofficial.github.io',
  
  // This tells Astro to prefix all assets with /harshira-shop/
  base: '/harshira-shop',
  
  vite: {
    plugins: [tailwindcss()]
  }
});
