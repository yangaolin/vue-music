import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from 'getters.js'
import state from './state'
import mutations from './mutations.js'

Vue.use(Vuex)

const debug = process.env.Node
export default new Vue.Store({
  actions,
  getters,
  state,
  mutations
})