import * as types from './mutations'
import { getApi } from 'src/common/api'

export const getBootImage = ({commit}) => {
  fetch(getApi().startImage).then((data) => {
    return data.json()
  }).then((data) => {
    commit(types.GETBOOTIMAGE, data)
  })
}

export const getNewsByDate = ({commit}, date) => {
  let url = getApi().news.before + date
  fetch(url).then((data) => {
    return data.json()
  }).then((data) => {
    commit(types.UPDATENEWS, data)
  })
}

export const getNews = ({commit}) => {
  let url = getApi().news.latest
  fetch(url).then((data) => {
    return data.json()
  }).then((data) => {
    commit(types.UPDATENEWS, data)
  })
}

export const getThemes = ({commit}) => {
  fetch(getApi().themes.list).then((data) => {
    return data.json()
  }).then((data) => {
    commit(types.UPDATETHEMES, data)
  })
}
