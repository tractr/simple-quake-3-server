'use strict';

import {RconService} from "../rcon/rcon.service";

/** @type {Array} */
const baseMaps = require('../../../maps/base.json');
/** @type {Array} */
const customMaps = require('../../../maps/custom.json');

class MapsServiceClass {

    constructor() {
        /** @type {Array} */
        this.mapsList = baseMaps.concat(customMaps);
    }

    setMap(mapName) {
        return RconService.setGameType(this._guessGameType(mapName))
            .then(RconService.setMap(mapName));
    }

    getMapsList() {
        return this.mapsList;
    }

    _guessGameType(mapName) {
        const mapDetails = this.mapsList.find(map => map.name === mapName);
        if (mapDetails && mapDetails.type === 'ctf') return 4;
        return 0; // Default, deathmatch
    }
}

export const MapsService = new MapsServiceClass();
