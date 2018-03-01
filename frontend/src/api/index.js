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

async function postData (apiRoute, body) {
    let result, parsed

    try {
        result = await postJSON(apiRoute, body)
        parsed = await result.json()
    } catch (e) {
        return undefined
    }
    
    if (parsed.hasOwnProperty('response'))
        return parsed.response.magic
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
    return await postData(api.requestMagic, { email })
}

export async function getToken (magic) {
    return await postData(api.getToken, { magic })
}