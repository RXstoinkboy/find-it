import {
    GEOLOCATION_START,
    GEOLOCATION_SUCCESS,
    GEOLOCATION_FAILURE
} from './types'

import {getLocation} from './getLocation'

export const geolocation = () => {
    return dispatch => {
        dispatch(geolocationStart());
        // get latitude and longitude from geolocation API
        const success = position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            console.log(`lat: ${lat}, long: ${long}`);
            // pass data to the store
            dispatch(geolocationSuccess(lat, long));
            // update city name based on received latitude and longitude
            dispatch(getLocation(lat, long));
        }

        const failure = err => {
            dispatch(geolocationFailure(err));
        }

        navigator.geolocation.getCurrentPosition(success, failure);
    }
}

export const geolocationStart = () => {
    return {
        type: GEOLOCATION_START
    }
}

export const geolocationSuccess = (lat, long) => {
    return {
        type: GEOLOCATION_SUCCESS,
        payload: {
            lat,
            long
        }
    }
}

export const geolocationFailure = err => {
    return {
        type: GEOLOCATION_FAILURE,
        payload: {err}
    }
}