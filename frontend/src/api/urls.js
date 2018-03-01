const getUserProfile = id => `/api/user/${id}/`
const requestMagic = '/api/auth/send_link/'

export default {
    getUserProfile,
    requestMagic
}