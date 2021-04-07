import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from './actions'
import { mutations } from './mutations'
import { State } from './state'
import { getters } from './getters';

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  mutations,
  state: new State(),
  getters
})
