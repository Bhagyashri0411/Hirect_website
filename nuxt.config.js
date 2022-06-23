export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    server: {
        port: process.env.PORT || 3000, // default: 3000
        host: '0.0.0.0' // for secure
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        // title: 'Hirect',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            // { hid: 'description', name: 'description', content: 'Hirect' },
            { name: 'format-detection', content: 'hirect, Hirect' },
            { name: 'keywords', content: 'telephone=no' },
            { name: 'google-site-verification', content: '4uvjLpSM5lIoPDwUukN1jPDhA7XOUImMuAPUiMAGKLM' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
        ],
        script: [
            { src: '/script/bootstrap.bundle.min.js', type: 'text/javascript' },
            { src: '/script/event-point.js' },
            { src: 'https://www.googletagmanager.com/gtag/js?id=AW-364643331' },
            { src: 'https://www.googletagmanager.com/gtag/js?id=UA-145309456-1' }
        ]
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',
                name: 'home',
                component: resolve(__dirname, 'pages/homepage/index.vue')
            })
        }
        // middleware: 'unknownRoute'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [

        './node_modules/vue-slick-carousel/dist/vue-slick-carousel.css',
        './node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        'element-ui/lib/theme-chalk/index.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/request.js',
        '@/plugins/sendToEsData.js',
        '@/plugins/common.js',
        '@/plugins/dateChange.js',
        '@/plugins/localSaveSubmitUrl',
        '@/plugins/jsonld.js'

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/google-analytics',
        '@nuxtjs/fontawesome'
    ],

    // Google Analytics
    googleAnalytics: {
        id: 'UA-145309456-1',
        debug: {
            sendHitTask: true,
            enabled: false
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/gtm'
    ],

    gtm: {
        id: 'GTM-TCZJ8KB'
    },

    fontawesome: {
        icons: {
            solid: true,
            brands: true
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },


}