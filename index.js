const got = require('got')

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
  value: env['returnRaw'] && env['returnRaw'] === true ? x.images.original.url : x.url,
  preview: `<style>
    body {
      background: url('${x.images.downsized_medium.url}');
      background-size: cover;
      background-position: 50% 50%;
    }
  </style>`
})))
