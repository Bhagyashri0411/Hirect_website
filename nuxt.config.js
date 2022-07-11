export default {
  version: '2.0.0',
  serverMiddleware: [
    { path: '/server-middleware', handler: '~/server-middleware/sendsms.js' },
  ],
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: '0.0.0.0', // for secure
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'Hirect',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Hirect' },
      { name: 'format-detection', content: 'hirect, Hirect' },
      { name: 'keywords', content: 'telephone=no' },
      { name: 'google-site-verification', content: '4uvjLpSM5lIoPDwUukN1jPDhA7XOUImMuAPUiMAGKLM' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    ],
    script: [
      { src: '/script/bootstrap.bundle.min.js', type: 'text/javascript' },
      { src: '/script/event-point.js' },
      // { src: 'https://www.googletagmanager.com/gtag/js?id=AW-364643331' },
      // { src: 'https://www.googletagmanager.com/gtag/js?id=UA-145309456-1' },
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        name: 'home',
        component: resolve(__dirname, 'pages/homepage/index.vue'),
      });
    },
    // middleware: 'unknownRoute'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    './node_modules/vue-slick-carousel/dist/vue-slick-carousel.css',
    './node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/request.js',
    '@/plugins/sendToEsData.js',
    '@/plugins/common.js',
    '@/plugins/dateChange.js',
    '@/plugins/sendAppLink',
    '@/plugins/localSaveSubmitUrl',
    '@/plugins/jsonld.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: {
      fileName: 'favicon.ico',
    },
    metadata: {
      mobileApp: true,
      mobileAppIos: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: 'favicon.ico',
      name: 'Hirect',
      theme_color: '#2ce2a2',
      lang: 'en',
      ogType: 'website',
      ogSiteName: 'Hirect',
      ogTitle: 'Hirect - Best Job App for Recruiters and Job Seekers',
      ogDescription: 'Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ',
    },
    manifest: {
      name: 'Hirect - Best Job App for Recruiters and Job Seekers',
      short_name: 'Hirect',
      lang: 'en',
      description: 'Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ',
      start_url: '/',
      useWebmanifestExtension: true,
      display: 'standalone',
    },
    workbox: {
      cacheOptions: {
        directoryIndex: '/',
        cacheAssets: true,
      },
    },
  },

  // Google Analytics
  // googleAnalytics: {
  //   id: 'UA-145309456-1',
  //   debug: {
  //     sendHitTask: true,
  //     enabled: false,
  //   },
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-ssr-cache',
  ],

  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: true,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/homepage',
      '/recruiters',
      '/job-seeker',
      '/enterprise-hiring',
      '/aboutus',

      // you can also pass a regular expression to test a path
      /^\/webhirect\+$/,

      // to cache only root route, use a regular expression
      /^\/$/,
    ],

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60,
    },
  },

  // gtm: {
  //   id: 'GTM-TCZJ8KB',
  // },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
