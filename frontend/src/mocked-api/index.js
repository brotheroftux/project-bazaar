import mockedProfile from '@/mocked-api/mocked-data/profile'

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
    return mockedProfile
}