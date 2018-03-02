import mockedProfile from '@/mocked-api/mocked-data/profile'
import mockedProjects from '@/mocked-api/mocked-data/projects'
import mockedRoles from '@/mocked-api/mocked-data/roles'
import mockedProfileShort from '@/mocked-api/mocked-data/shortProfile'

export function requestMagic () {
    return '/auth/__mock_magic__'
}

export function getToken () {
    return {
        token: '__mock_token_value__',
        user_id: 7
    }
}

export function getUserProfile () {
    return { user: mockedProfile, roles: mockedRoles }
}

export function getUserProfileShort () {
    return mockedProfileShort
}

export function getProjectData () {
    const mockedProject = mockedProjects[2]

    return { project: mockedProject, roles: mockedRoles }
}