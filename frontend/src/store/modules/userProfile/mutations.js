export default {
    setUserProfile: function (state, data) {
        state.user = data
    },
    decorateRole: function (state, { roleIdx, value }) {
        state.user.roles[roleIdx].project = value
    }
}