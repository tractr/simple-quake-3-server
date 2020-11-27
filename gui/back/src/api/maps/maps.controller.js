'use strict';

import {handleError, responseWithResult} from "../helpers";
import {MapsService} from "./maps.service";

export function index(req, res) {
    responseWithResult(res)(MapsService.getMapsList());
}

export function setMap(req, res) {
    MapsService.setMap(req.body.setMap)
        .then(responseWithResult(res))
        .catch(handleError(res));
}

