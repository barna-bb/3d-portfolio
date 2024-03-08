import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://barna-bb.github.io/3d-portfolio/",
  assetsInclude: ['**/*.glb']
})
