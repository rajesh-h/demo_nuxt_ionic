import { shopName } from './config'
const baseHref = process.env.BASE_HREF || '/'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: shopName || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' },
    ],
  },
  // loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: [
    '../node_modules/@ionic/core/css/core.css',
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    '../node_modules/@ionic/core/css/ionic.bundle.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/ionic.js', mode: 'client' },
    '~/plugins/filters.js',
    '~/plugins/ionicons.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          production: {
            apiKey: 'AIzaSyAbbPTtsLx4D_eQnitRSKv02SWgWUWT2x0',
            authDomain: 'testbeta-2020.firebaseapp.com',
            databaseURL: 'https://testbeta-2020.firebaseio.com',
            projectId: 'testbeta-2020',
            storageBucket: 'testbeta-2020.appspot.com',
            messagingSenderId: '392148360961',
            appId: '1:392148360961:web:fe5df7c3adc033c90b4500',
            measurementId: 'G-EQJBVDC6XQ',
          },
          development: {
            apiKey: 'AIzaSyAbbPTtsLx4D_eQnitRSKv02SWgWUWT2x0',
            authDomain: 'testbeta-2020.firebaseapp.com',
            databaseURL: 'https://testbeta-2020.firebaseio.com',
            projectId: 'testbeta-2020',
            storageBucket: 'testbeta-2020.appspot.com',
            messagingSenderId: '392148360961',
            appId: '1:392148360961:web:fe5df7c3adc033c90b4500',
            measurementId: 'G-EQJBVDC6XQ',
          },
        },
        customEnv: false,
        onFirebaseHosting: false,
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              // onAuthStateChangedMutation: 'SET_AUTH_USER',
              // onAuthStateChangedAction: null,
            },
          },
          firestore: {
            memoryOnly: false, // default
          },
          // functions: {
          //   location: 'us-central1', // Default
          //   emulatorPort: 12345,
          // },
          storage: true,
          // realtimeDb: true,
          // performance: true,
          // analytics: true,
          // remoteConfig: {
          //   settings: {
          //     fetchTimeoutMillis: 60000, // Default
          //     minimumFetchIntervalMillis: 43200000, // Default
          //   },
          //   defaultConfig: {
          //     welcome_message: 'Welcome',
          //   },
          // },
          // messaging: {
          //   createServiceWorker: true,
          //   actions: [
          //     {
          //       action: '<randomName>',
          //       url: '<randomUrl>',
          //     },
          //   ],
          //   fcmPublicVapidKey: '<publicVapidKey>', // OPTIONAL : Sets vapid key for FCM after initialization
          // },
        },
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // transpile: ['/ionicons/'],
  },
  generate: {
    routes: ['/'],
  },
  router: {
    // router with correct public path
    base: baseHref,
    mode: 'history',
  },
}
