const host = 'http://news-at.zhihu.com'
const apiUrl = host + '/api'
const apiVersion = 4
const proxy = require('./proxy.json')

// This var is enable api proxy , see more https://github.com/moonou/api-proxy-server
const proxyEnable = true

const config = {
  startImage: '/start-image/1080*1776'
}

function addPrestr (data, prestr) {
  for (let key in data) {
    if (typeof data[key] === 'object') {
      addPrestr(data[key], prestr)
    } else {
      data[key] = prestr + data[key]
    }
  }
}

export const getApi = () => {
  let _config = Object.assign({}, config)
  addPrestr(_config, apiUrl + '/' + apiVersion)
  proxyEnable ? addPrestr(_config, proxy.host) : ''
  return _config
}

