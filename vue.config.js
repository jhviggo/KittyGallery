const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const fg = require('fast-glob');

// const pathEntriesGuides = fg.sync('./content/pages/embeddedGuides/*.*')
//  .map(entry => `/guides/videoer/${entry.split('/').pop().replace('.json', '')}`);

module.exports = {
  devServer: {
    port: 3000
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/gallery',
          '/commissions'
        ] // .concat(pathEntries)
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .use(require('copy-webpack-plugin'), [[{
        from: 'public',
        ignore: ['./index.html', '.DS_Store']
      }]])
  }
}
