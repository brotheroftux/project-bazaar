import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

import modules from '@/store/modules'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

const state = {
    token: null
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules,

    strict: isDebug
})