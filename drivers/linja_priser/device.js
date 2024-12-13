'use strict';

const Homey = require('homey');
const { fetchPrices } = require('../../lib/api');

class LinjaPriserDevice extends Homey.Device {
    async onInit() {
        this.log('Linja Priser Device initialized');

        // Fetch initial data
        const apiKey = this.getSetting('api_key');
        const meteringPointId = this.getSetting('metering_point_id');

        try {
            const data = await fetchPrices(apiKey, meteringPointId);
            this.updateCapabilities(data);
        } catch (error) {
            this.log('Error fetching data:', error);
        }

        // Schedule updates
        this.homey.setInterval(async () => {
            try {
                const data = await fetchPrices(apiKey, meteringPointId);
                this.updateCapabilities(data);
            } catch (error) {
                this.log('Error fetching data:', error);
            }
        }, 3600000); // Update every hour
    }

    updateCapabilities(data) {
        if (!data) return;

        const currentHour = new Date().toISOString().slice(0, 13) + ':00:00+00:00';
        const hourData = data.gridTariffCollections[0].gridTariff[0].tariffPrice.hours.find(
            h => h.startTime === currentHour
        );

        if (hourData) {
            const totalPrice = hourData.energyPrice.total;
            this.setCapabilityValue('measure.price', totalPrice).catch(this.error);
        }
    }
}

module.exports = LinjaPriserDevice;