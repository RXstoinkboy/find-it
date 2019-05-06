import {
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
} from './types'

import axios from 'axios'
import { setCity } from './setCity';

export const getLocation = (lat = null, long = null, city = null) => {
    return dispatch => {
        dispatch(getLocationStart());
        
        // if you change location by hand then it will be updated
        if(city !== null){
            dispatch(setCity(city));
        // on initial load, current location will be updated based on latitude and longitude from geolocation api
        } else {
            return axios.get(`/v3/businesses/search?latitude=${lat}&longitude=${long}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                    }
                })
                .then(res => {
                    dispatch(getLocationSuccess(res.data.businesses[0].location.city))})
                .catch(err => dispatch(getLocationFailure(err)))
        }
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