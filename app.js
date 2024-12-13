'use strict';

const Homey = require('homey');
const { fetchPrices } = require('./lib/api');

class LinjaPriserApp extends Homey.App {
    async onInit() {
        this.log('Linja Priser app initialized');
    }

    async getPrices(apiKey, meteringPointId) {
        try {
            const prices = await fetchPrices(apiKey, meteringPointId);
            return prices;
        } catch (error) {
            this.log('Failed to fetch prices:', error);
            return null;
        }
    }
}

module.exports = LinjaPriserApp;