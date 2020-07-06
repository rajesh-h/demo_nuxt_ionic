const pkg = require('./package')

module.exports = {
  clearCart: true, // Whether to clear the cart after order is placed. Useful while testing
  currency: { symbol: 'R', code: 'ZAR' },
  shopSlug: 'mochachos',
  shopName: 'Mochachos',
  manifest: {
    name: 'Mochachos',
    short_name: 'Mochachos',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#555',
  },
  head: {
    titleTemplate: 'Mochachos | %s',
    title: pkg.description,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Karla:400,700',
      },
    ],
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: pkg.keyword },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pkg.description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description,
      },
      // {
      //   property: "og:image",
      //   content:
      //     "https://s3.envato.com/files/252462089/banner.png"
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: pkg.description,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: pkg.description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://foodfire.info',
      },
    ],
    noscript: [
      {
        innerHTML: `We're sorry but Mochachos doesn't work properly without JavaScript enabled. Please enable it to continue.`,
      },
    ],
    htmlAttrs: { lang: 'en' },
    __dangerouslyDisableSanitizers: ['script'],
  },
}
