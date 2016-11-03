import * as types from '../mutations'

const state = {
  data: {}
}

const mutations = {
  [types.UPDATETHEMES] (state, themes) {
    state.data = themes
  }
}

export default {
  state,
  mutations
}
