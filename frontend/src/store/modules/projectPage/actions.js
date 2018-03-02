import { getProjectData, getUserProfileShort } from '@/mocked-api'

export default {
    getProjectData: async function ({ state, commit }, id) {
        const projectData = await getProjectData(id)

        commit('setProjectData', projectData)

        for (let i in state.project.roles) {
            const isTaken = state.project.roles[i].status
            if (!isTaken) continue

            const userId = state.project.roles[i].id_user

            const userData = await getUserProfileShort(userId)

            commit({
                type: 'decorateRole',
                roleIdx: i,
                value: userData
            })
        }
    }
}
