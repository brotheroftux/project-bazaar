import mockedProfile from '@/mocked-api/mocked-data/profile'

export function requestMagic () {
    return '/auth/__mock_magic__'
}

export function getToken () {
    return '__mock_token_value__'
}

export function getUserProfile () {
    return mockedProfile
}