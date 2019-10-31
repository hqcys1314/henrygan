
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    //'element-ui/lib/theme-chalk/index.css',
    {
      src:'~assets/common/common.less',
      lang:'less'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'@/plugins/element-ui',
    { src: '~/plugins/axios', ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true, // 表示开启代理
    // prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  /*
  ** Build configuration
  */
  build: {
    //transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    base: "/" //此为根目录，如果有具体目录需求按实际情况写
  },
  proxy: {

    '/api': {
      target: 'http://cms.lixuan222.com/', // 目标接口域名
      changeOrigin: true
    }
  },
  }
