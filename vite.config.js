import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://job-portal-1f95.onrender.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})