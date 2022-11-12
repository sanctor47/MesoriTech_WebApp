import client from './HttpClient'

const endpoint = 'plants'

export const getAllPlants = async (data) => {
    try {
        const response = await client.get(`${endpoint}`)
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

export const getPlantById = async (id) => {
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