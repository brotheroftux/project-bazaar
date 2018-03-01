import postJSON from '@/util/postJSON'

import api from '@/api/urls.js'

async function fetchData (apiRoute) {
    let data, parsed

    try {
        data = await fetch(apiRoute)
        parsed = await data.json()
    } catch (e) {
        return undefined
    }


    if (parsed.hasOwnProperty('response'))
        return parsed.response
    else
        return undefined
}

export async function getUserProfile (id) {
    return await fetchData(api.getUserProfile(id))
}

export async function getProjectData (id) {
    return await fetchData(api.getProjectData(id))
}

export async function requestMagic (email) {
    const result = await postJSON(api.requestMagic, { email })

    const parsed = result.json()

    if (parsed.hasOwnProperty('response'))
        return true
    else
        return false
}