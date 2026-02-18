 import { defineConfig } from 'vite'
import react from '@vitejs/react'

export default defineConfig({
  plugins: [react()],
  base: '/my-react-chatbot/', // This MUST match your GitHub repo name
})