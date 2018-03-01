export default {
    setToken: function (state, authObject) {
        state.token = authObject.token
        state.userId = authObject.user_id
    }
}