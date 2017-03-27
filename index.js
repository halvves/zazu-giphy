const got = require('got')
const indexer = (obj, i) => obj[i]

module.exports = () => (str, env = {}) => got('api.giphy.com/v1/gifs/search', {
  json: true,
  query: {
    q: str,
    limit: 5,
    api_key: 'dc6zaTOxFJmzC'
  }
}).then(res => res.body.data.map((x, i) => ({
  icon: 'fa-gift',
  title: `Giphy Results ${i + 1}`,
  subtitle: 'Select to copy to the clipboard',
  value: env.src_main ? env.src_main.split('.').reduce(indexer, x) : x.url,
  preview: `<style>
    body {
      background: url('${x.images.downsized_medium.url}');
      background-size: cover;
      background-position: 50% 50%;
    }
  </style>`
})))
