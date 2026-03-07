import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your production URL
  site: 'https://harshiraofficial.github.io',
  
  // CRITICAL: This must match your GitHub repository name!
  base: '/harshira-shop', 
  
  vite: {
    plugins: [tailwindcss()]
  }
});
