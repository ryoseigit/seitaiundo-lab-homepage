// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
<<<<<<< HEAD
  outDir: './build', 
  base: '/cell-motility/', 
=======
  outDir: './public_html', 
  base: '/~honda-l/', 
>>>>>>> e78fd93d642ebfe7fff8167e801221da5ac4c29f
});


