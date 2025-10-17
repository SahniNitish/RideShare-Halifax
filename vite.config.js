import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'ide-nitish-rbchubhacks.services.oip.virtusa.dev',
      '.services.oip.virtusa.dev' // Allow all Virtusa cloud hosts
    ],
    hmr: {
      clientPort: 3000,
      host: 'ide-nitish-rbchubhacks.services.oip.virtusa.dev'
    }
  },
  base: '/'
})
