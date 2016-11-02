import * as types from '../mutations'

const state = {
  news: []
}

const mutations = {
  [types.UPDATENEWS] (state, news) {
    let flag = true
    state.news.forEach((v) => {
      if (v.date === news.date) {
        v.stories = news.stories
        flag = false
      }
    })
    if (flag) {
      state.news.push(news)
    }
  }
}

export default {
  state,
  mutations
}
