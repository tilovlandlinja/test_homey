'use strict';

const Homey = require('homey');

class LinjaPriserDriver extends Homey.Driver {
    onInit() {
        this.log('Linja Priser Driver initialized');
    }
}

module.exports = LinjaPriserDriver;