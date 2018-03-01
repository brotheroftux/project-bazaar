import { getProjectData } from '@/api'

export default {
    getProjectData: async function ({ commit }, id) {
        const projectData = await getProjectData(id)

        commit('setProjectData', projectData)
    }
}