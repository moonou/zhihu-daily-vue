const host = 'http://news-at.zhihu.com'
const apiUrl = host + '/api'
const apiVersion = 4
const proxy = require('./proxy.json')

// This var is enable api proxy , see more https://github.com/moonou/api-proxy-server
const proxyEnable = true

let config = {
  startImage: '/start-image/1080*1776',
  news: {
    before: '/news/before/',
    latest: '/news/latest',
    content: '/news'
  },
  themes: {
    list: '/themes',
    content: '/theme'
  }
}

function addPrestr (data, prestr) {
  for (let key in data) {
    if (typeof data[key] === 'object') {
      addPrestr(data[key], prestr)
    } else {
      // console.log(data[key], prestr)
      data[key] = prestr + data[key]
    }
  }
}

function deepCopy (target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = {}
      deepCopy(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
}

export const getApi = () => {
  let _config = {}
  deepCopy(_config, config)
  addPrestr(_config, apiUrl + '/' + apiVersion)
  proxyEnable ? addPrestr(_config, proxy.host) : ''
  return _config
}

export const proxyserver = proxy.host
