import defaultRoutes from "./src/config/routes"
import dictionary from "./src/locales/dictionary"
const path = require('path')


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            RESULT_PER_PAGE: process.env.RESULT_PER_PAGE
        }
    },
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

        defaultLocale: 'fr-FR',
        strategy: 'no_prefix',
        langDir: './locales/',
        lazy: true,
        locales: [
            {
                name: 'English',
                code: 'en-US',
                iso: 'en-US',
                file: 'en.json',
            },
            {
                name: 'French',
                code: 'fr-FR',
                file: 'fr.json',
                iso: 'fr-FR',
            },
        ],
        vueI18n: {
            // legacy: false,
            // locale: ' ',
            fallbackLocale: 'en-US',
        },



        //     detectBrowserLanguage: false,
        //     strategy: 'no_prefix',
        //     // only load currently used locale on page load
        //     lazy: true,
        //     // langDir: './locales/',
        //     locales: [
        //         { code: 'fr', file: `fr-FR.json` },
        //         { code: 'en', file: `en-US.json` },
        //     ],
        //     defaultLocale: 'en',
        //     vueI18n: {
        //         legacy: false,
        //         locale: 'en',
        //         fallbackLocale: 'en',
        //     },
    },
    'hooks': {
        'pages:extend'(routes) {
            defaultRoutes.forEach(route => routes.push(route))
        }
    }
})
