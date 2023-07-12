import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // when request '/api/*' url, it will be forwarded to 'http://localhost:5000/api/*'
      '/api': 'http://localhost:5000',
    },
  },
})

