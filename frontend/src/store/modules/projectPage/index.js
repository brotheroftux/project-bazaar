import mutations from './mutations'
import actions from './actions'

const state = {
    project: null
}

export default {
    namespaced: true,
    
    state,
    mutations,
    actions
}