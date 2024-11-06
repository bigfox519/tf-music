import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import pxtoviewport from 'postcss-px-to-viewport'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 1920
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
