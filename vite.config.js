 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-react-chatbot/', // This MUST match your GitHub repo name
})