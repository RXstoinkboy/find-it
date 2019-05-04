import {
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
} from './types'

import axios from 'axios'

export const getLocation = (lat, long) => {
    return dispatch => {
        dispatch(getLocationStart());

        return axios.get(`/v3/businesses/search?latitude=${lat}&longitude=${long}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            .then(res => {
                console.log(res);
                dispatch(getLocationSuccess(res.data.businesses[0].location.city))})
            .catch(err => dispatch(getLocationFailure(err)))
    }
}

const getLocationStart = () => {
    return {
        type: GET_LOCATION_START
    }
}

const getLocationSuccess = city => {
    return {
        type: GET_LOCATION_SUCCESS,
        payload: {
            city
        }
    }
}

const getLocationFailure = err => {
    return {
        type: GET_LOCATION_FAILURE,
        payload: {err}
    }
}