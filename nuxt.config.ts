import defaultRoutes from "./src/config/routes"
import dictionary from './src/config/dictionary.ts'
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
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Poppins: {
                wght: [400, 600]
            }
        }
    },
    i18n: {
        vueI18n: {
            legacy: false,
            locale: 'fr',
            messages: dictionary
        }
    },
    'hooks': {
        'pages:extend'(routes) {
            defaultRoutes.forEach(route => routes.push(route))
        }
    }
})
