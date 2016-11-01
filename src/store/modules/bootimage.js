import * as types from '../mutations'

const state = {
  text: '',
  img: ''
}

const mutations = {
  [types.GETBOOTIMAGE] (state, data) {
    state.text = data.text
    state.img = data.img
  }
}

export default {
  state,
  mutations
}
