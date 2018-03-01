import { requestMagic, getToken } from '@/mocked-api'

export default {
    requestMagic: async function ({ dispatch }, email) {
        const result = await requestMagic(email)

        if (result) {
            window.location.href = result
            dispatch('alertInfo', {
                text: 'Ссылка отправлена на указанный e-mail'
            })
        } else {
            dispatch('alertError', {
                text: 'Произошла ошибка'
            })
        }
    },
    authorize: async function ({ commit }, magic) {
        const token = await getToken(magic)

        if (token)
            commit('setToken', token)
    }
}