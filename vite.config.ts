import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown, { code } from 'vite-plugin-md'
import Document, { document } from './src'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Document(), // I want to remove it, and register plugin in builder
    Markdown({
      builders: [
        code({
          theme: 'base',
          layoutStructure: 'tabular',
        }),
        document(),
      ],
    }),
  ],
})

export default config
