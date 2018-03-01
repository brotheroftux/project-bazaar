import api from '@/util/api/urls.js'

export async function getUserProfile (id) {
    const data = await fetch(api.getUserProfile(id))

    const parsed = data.json()

    if (parsed.hasOwnProperty('response'))
        return parsed.response
    else
        return undefined
}