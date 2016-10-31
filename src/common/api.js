const host = 'http://news-at.zhihu.com'
const apiUrl = host + '/api'
const apiVersion = 4
const proxy = require('./proxy.json')
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
  return _config
}

export const getProxyApi = () => {
  let _config = getApi()
  addPrestr(_config, proxy.host)
  return _config
}
