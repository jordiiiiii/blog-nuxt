import colors from 'vuetify/es5/util/colors'

export default {
  // should hold all env variables that are public as these will be exposed on the frontend. This could include a reference to your public URL for example.
  // is available using $config in both server and client.
  publicRuntimeConfig: {
    rootAPI: process.env.BASE_URL || process.env.ROOT_API,
    // rootAPI: process.env.ROOT_API || 'http://localhost:3000', // https://restful-api-grail.herokuapp.com
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - blog-nuxt',
    title: 'blog-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  // Customize the progress-bar color: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading-indicator
  loading: { color: '#f2b134', height: '1px', failedColor: 'red' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || process.env.ROOT_API,
    // baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primer: '#112f41',
          segon: '#068587',
          tercer: '#4fb99f',
          quart: '#f2b134',
          cinque: '#FF7F50',
          btnGreen: '#3b8070',
          btnGrey: '#35495e',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          primer: '#112f41',
          segon: '#068587',
          tercer: '#4fb99f',
          quart: '#f2b134',
          cinque: '#FF7F50',
          btnGreen: '#3b8070',
          btnGrey: '#35495e',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Set the port to 8000
  server: {
    port: process.env.PORT || 8000,
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         // required: true,
  //         type: '',
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get' },
  //       },
  //     },
  //   },
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'get' },
          user: {
            url: '/login/user',
            method: 'get',
            propertyName: 'data.attributes',
          },
        },
        // tokenRequired: true,
        tokenType: '',
      },
    },
  },
}
