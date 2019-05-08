import {
    LAT_LONG_START,
    LAT_LONG_SUCCESS,
    LAT_LONG_FAILURE
} from './types'

import axios from 'axios'

export const latLong = city => {
    return dispatch => {
        dispatch(latLongStart);

        return axios.get(`/geo/cities?limit=5&namePrefix=${city}&sort=-population`, {
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_GEODB_KEY}`,
                'X-RapidAPI-Host': `wft-geo-db.p.rapidapi.com`
            }
        })
            .then(res => dispatch(latLongSuccess(res.data)))
            .catch(error => dispatch(latLongFailure(error)))
    }
}

export const latLongStart = () => {
    return {
        type: LAT_LONG_START
    }
}

export const latLongSuccess = locationData => {
    return {
        type: LAT_LONG_SUCCESS,
        payload: {
            locationData
        }
    }
}

export const latLongFailure = error => {
    return {
        type: LAT_LONG_FAILURE,
        payload: {
            error
        }
    }
}