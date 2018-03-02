import { getUserProfile, getProjectDataShort } from '@/mocked-api'

export default {
    getUserProfile: async function ({ state, commit }, id) {
        const userProfile = await getUserProfile(id)

        commit('setUserProfile', userProfile)

        for (let i in state.user.roles) {
            const projectId = state.user.roles[i].id_project
            const projectData = await getProjectDataShort(projectId)

            commit({
                type: 'decorateRole',
                roleIdx: i,
                value: projectData
            })
        }
    }
}
