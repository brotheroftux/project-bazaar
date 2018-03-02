import { getUserProfile } from '@/mocked-api'

export default {
    getUserProfile: async function ({ commit }, id) {
        const userProfile = await getUserProfile(id)

        commit('setUserProfile', userProfile)
    }
}
