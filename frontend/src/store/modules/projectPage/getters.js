export default {
    interests: function (state) {
        const reduced = state.project.roles.reduce((previous, current) => {
            return previous.concat(
                current.interests ? current.interests : []
            )
        }, [])

        return Array.from(new Set(reduced))
    },
    skills: function (state) {
        const reduced = state.project.roles.reduce((previous, current) => {
            return previous.concat(
                current.skills ? current.skills : []
            )
        }, [])

        return Array.from(new Set(reduced))
    },
    project: function (state) {
        return state.project.project
    },
    roles: function (state) {
        return state.project.roles
    }
}