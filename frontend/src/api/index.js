import postJSON from '@/util/postJSON'

import api from '@/api/urls.js'

export async function getUserProfile (id) {
    let data, parsed

    try {
        data = await fetch(api.getUserProfile(id))
        parsed = await data.json()
    } catch (e) {
        return undefined
    }


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