import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { state } from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'

const store = new Vuex.Store({
    state : state,
    getters : getters,
    mutations : mutations,
    actions : actions
})

export default store