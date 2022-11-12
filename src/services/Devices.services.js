import client from './HttpClient'

const endpoint = 'devices'

export const getAllDevices = async (id) => {
    try {
        const response = await client.get(`${endpoint}/createdBy/${id}`)
        if (response.data.data) {
            console.log(response.data.data)
            return response.data.data
        }
    } catch (error) {
        throw error
    }
}

export const getLatestReading = async (id, sensor) => {
    try {
        const response = await client.get(`${endpoint}/latestReading/${id}?sensor=${sensor}`)
        // const response = await client.get(`${endpoint}/latestReading/${id}`)
        if (response.data.data) {
            // console.log(response.data.data)
            return response.data.data
        }
    } catch (error) {
        throw error
    }
}

export const getDeviceById = async (id) => {
    try {
        const response = await client.get(`${endpoint}/id/${id}`);
        if (response.data.data) {
            console.log(response.data.data)
            return response.data.data;
        }
    } catch (error) {
        throw error
    }
}

export const newDevice = async (data) => {
    try {
        const response = await client.post(`${endpoint}`, data)
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const updateDeviceById = async (id, data) => {
    try {
        const response = await client.put(`${endpoint}/id/${id}`, data);
        if (response.data.data) {
            console.log(response.data.data)
            return response.data.data;
        }
    } catch (error) {
        throw error
    }
}