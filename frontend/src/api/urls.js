const getUserProfile = id => `/api/user/${id}/`
const getUserProfileShort = id => getUserProfile(id) + 'short/'
const getProjectData = id => `/api/project/${id}/`
const getProjectDataShort = id => getProjectData(id) + 'short/'
const requestMagic = '/api/auth/send_link/'
const getToken = '/api/auth/magic/'

export default {
    getUserProfile,
    getUserProfileShort,
    getProjectData,
    getProjectDataShort,
    requestMagic,
    getToken
}