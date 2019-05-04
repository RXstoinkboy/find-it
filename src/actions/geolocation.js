import {
    GEOLOCATION_START,
    GEOLOCATION_SUCCESS,
    GEOLOCATION_FAILURE
} from './types'

import {getLocation} from './getLocation'

export const geolocation = () => {
    return dispatch => {
        dispatch(geolocationStart());

        const success = position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            console.log(`lat: ${lat}, long: ${long}`);

            dispatch(geolocationSuccess(lat, long));
            dispatch(getLocation(lat, long));
        }

        const failure = err => {
            dispatch(geolocationFailure(err));
        }

        navigator.geolocation.getCurrentPosition(success, failure);
    }
}

const geolocationStart = () => {
    return {
        type: GEOLOCATION_START
    }
}

const geolocationSuccess = (lat, long) => {
    return {
        type: GEOLOCATION_SUCCESS,
        payload: {
            lat,
            long
        }
    }
}

const geolocationFailure = err => {
    return {
        type: GEOLOCATION_FAILURE,
        payload: {err}
    }
}