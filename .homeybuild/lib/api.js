const axios = require('axios');

const API_URL = 'https://test-nettleie-api.linja.no/api/v1/GridTariff/meteringpointsgridtariffs';

async function fetchPrices(apiKey, meteringPointId) {
    const headers = { 'x-api-key': apiKey };
    const payload = {
        range: 'today',
        meteringPointIds: [meteringPointId]
    };

    const response = await axios.post(API_URL, payload, { headers });
    return response.data;
}

module.exports = { fetchPrices };