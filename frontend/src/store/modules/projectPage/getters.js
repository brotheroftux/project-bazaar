export default {
    interests: function (state) {
        return state.project.roles.reduce((previous, current) => {
            return previous.concat(
                current.interests ? current.interests : []
            )
        }, [])
    },
    skills: function (state) {
        return state.project.roles.reduce((previous, current) => {
            return previous.concat(
                current.skills ? current.skills : []
            )
        }, [])
    }
}