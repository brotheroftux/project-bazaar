const getUserProfile = id => `/api/user/${id}/`
const getProjectData = id => `/api/project/${id}/`
const requestMagic = '/api/auth/send_link/'

export default {
    getUserProfile,
    getProjectData,
    requestMagic
}