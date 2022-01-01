/**
 * vuex最核心的管理对象store
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
export default new Vuex.Store({
  modules:{
    user
  },
})