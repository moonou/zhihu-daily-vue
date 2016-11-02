require('es6-promise').polyfill()
import 'whatwg-fetch'
import Vue from 'vue'
import Vuex from 'vuex'
import hello from './modules/hello'
import bootimage from './modules/bootimage'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    hello,
    bootimage
  },
  strict: debug
})
