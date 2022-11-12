import client from './HttpClient'

const endpoint = 'users'

export const login = async (data) => {
    try {
        const response = await client.post(`${endpoint}/login`, data)
        if (response.data.data.token) {
            console.log(response.data.data)
            localStorage.setItem('token', JSON.stringify(response.data.data.token))
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
            return response.data.data
        }
    } catch (error) {
        console.log('Auth Login Error: ' + error)
        throw error
    }
}

export const signup = async (data) => {
    try {
        const response = await client.post(`${endpoint}/signup`, data)
        if (response.data.data.token) {
            console.log(response.data.data)
            localStorage.setItem('token', JSON.stringify(response.data.data.token))
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
            return response.data.data
        }
    } catch (error) {
        console.log('Auth Login Error: ' + error)
        throw error
    }
}

export const requestVer = async (data) => {
    try {

    } catch (error) {
        console.log(error);

    }
}

export const confirmVer = async (data) => {
    try {

    } catch (error) {
        console.log(error);

    }
}

export const resetPasswoed = async (data) => {
    try {

    } catch (error) {

    }
}