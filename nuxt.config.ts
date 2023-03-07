import defaultRoutes from "./src/config/routes"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
