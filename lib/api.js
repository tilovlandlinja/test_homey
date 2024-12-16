const axios = require('axios');

const API_URL = 'https://test-nettleie-api.linja.no/api/v1/GridTariff/meteringpointsgridtariffs';

async function fetchPrices(apiKey, meteringPointId) {
    if (!apiKey || !meteringPointId) {
        throw new Error('API key and metering point ID are required');
    }

    const headers = { 'x-api-key': apiKey };
    const payload = {
        range: 'today',
        meteringPointIds: [meteringPointId]
    };

    try {
        const response = await axios.post(API_URL, payload, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching prices:', error.message);
        throw error;
    }
}

module.exports = { fetchPrices };