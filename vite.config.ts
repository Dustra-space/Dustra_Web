import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo from /Dustra_Web/, so production assets need
// that prefix. Keyed on mode rather than command so `vite preview` also serves
// under the prefix; dev stays at the root so localhost URLs are unchanged.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Dustra_Web/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5180,
  },
}))
