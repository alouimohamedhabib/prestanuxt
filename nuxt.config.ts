import defaultRoutes from "./src/config/routes"
const path = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'assets/styles/bootstrap.scss'
    ],
    vite: {
        resolve: {
            alias: {
                '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
                '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons')
            }
        }
    },
    srcDir: "./src",
    modules: [
        '@pinia/nuxt',
    ],
    'hooks': {
        'pages:extend'(routes) {
            defaultRoutes.forEach(route => routes.push(route))
        }
    }
})
