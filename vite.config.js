import { defineConfig } from 'vite'
import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        // Add rollup options to ensure proper asset handling
        rollupOptions: {
            input: {
                main: '/src/index.html'
            }
        }
    },
    plugins: [
        restart({ 
            restart: ['../static/**']
        }),
        glsl()
    ]
})