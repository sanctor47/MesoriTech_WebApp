import client from './HttpClient'

const endpoint = 'readings'

export const getLineChartData = async (id, sensor) => {
    try {
        const response = await client.get(`${endpoint}/linechart/${id}?sensor=${sensor}`)
        if (response.data.data) {
            console.log(response.data.data)
            return response.data.data
        }
    } catch (error) {
        throw error
    }
}

