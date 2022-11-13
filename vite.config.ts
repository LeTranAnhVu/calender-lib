import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                // example : additionalData: `@import "./src/design/styles/variables";`
                // dont need include file extend .scss
                additionalData: `@import "@/themes/theme";`
            },
        },
    }, 
})