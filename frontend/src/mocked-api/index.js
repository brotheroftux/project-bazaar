import mockedProfile from '@/mocked-api/mocked-data/profile'
import mockedProjects from '@/mocked-api/mocked-data/projects'

export function requestMagic () {
    return '/auth/__mock_magic__'
}

export function getToken () {
    return '__mock_token_value__'
}

export function getUserProfile () {
    return mockedProfile
}

export function getProjectData () {
    return mockedProjects[1]
}