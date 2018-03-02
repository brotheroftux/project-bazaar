export default {
    setProjectData: function (state, data) {
        state.project = data
    },
    decorateRole: function (state, { roleIdx, value }) {
        state.project.roles[roleIdx].user = value
    }
}