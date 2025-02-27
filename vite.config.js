import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: 'https://chat-server-1-bfoj.onrender.com', // Correct URL
        changeOrigin: true,
        secure: false,
      }
    }
  },
})
