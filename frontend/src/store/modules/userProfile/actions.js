import { getUserProfile } from '@/api'

export default {
    getUserProfile: async function ({ commit }, id) {
        const userProfile = await getUserProfile(id)

        commit('setUserProfile', userProfile)
    }
}
