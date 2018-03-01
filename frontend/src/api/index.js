import postJSON from '@/util/postJSON'

import api from '@/api/urls.js'

export async function getUserProfile (id) {
    const data = await fetch(api.getUserProfile(id))

    const parsed = data.json()

    if (parsed.hasOwnProperty('response'))
        return parsed.response
    else
        return undefined
}

export async function requestMagic (email) {
    const result = await postJSON(api.requestMagic, { email })

    const parsed = result.json()

    if (parsed.hasOwnProperty('response'))
        return true
    else
        return false
}