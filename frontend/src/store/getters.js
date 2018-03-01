export default {
    isAuthorized: function (state) {
        return state.token !== null
    }
}