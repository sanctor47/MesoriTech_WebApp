import client from './HttpClient'

const endpoint = 'feilds'

export const getAllFeilds = async (id) => {
    try {
        const response = await client.get(`${endpoint}/domain/${id}`)
        if (response.data.data) {
            console.log(response.data.data)
            return response.data.data
        }
    } catch (error) {
        throw error
    }
}

export const getFeildById = async (id) => {
    try {
        const response = await client.get(`${endpoint}/id/${id}`)
        if (response.data.data) {
            console.log(response.data.data)
            // localStorage.setItem('token', JSON.stringify(response.data.data.token))
            return response.data.data
        }
    } catch (error) {
        // console.log('Auth Login Error: ' + error)
        throw error
    }
}

export const NewField = async (data) => {
    try {
        const response = await client.post(`${endpoint}`, data)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error);
        throw error
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