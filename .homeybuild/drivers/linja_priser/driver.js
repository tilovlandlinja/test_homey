'use strict';

const Homey = require('homey');

class LinjaPriserDriver extends Homey.Driver {
    onInit() {
        const appName = this.homey.app.manifest.name;
        this.log(`${appName} - Linja Priser Driver initialized`);
    }
}

module.exports = LinjaPriserDriver;