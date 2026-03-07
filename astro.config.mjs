
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
  site: 'https://harshiraofficial.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
