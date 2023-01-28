/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
