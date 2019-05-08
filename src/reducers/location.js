import {
    GEOLOCATION_START,
    GEOLOCATION_SUCCESS,
    GEOLOCATION_FAILURE,
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
    SET_CITY,
    LAT_LONG_START,
    LAT_LONG_SUCCESS,
    LAT_LONG_FAILURE
} from '../actions/types'

export const initialState = {
    loading: false,
    error: null,
    lat: null,
    long: null,
    city: '',
    cities: []
}

export const location = (state = initialState, action) => {
    switch (action.type){
        case GEOLOCATION_START:
            return {
                ...state,
                loading: true
            }
        case GEOLOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                lat: action.payload.lat,
                long: action.payload.long,
            }
        case GEOLOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.err
            }
        case GET_LOCATION_START:
            return {
                ...state,
                loading: true
            }
        case GET_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                city: action.payload.city
            }
        case GET_LOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.err
            }
        case SET_CITY:
            return {
                ...state,
                city: action.payload.value
            }
        case LAT_LONG_START:
            return {
                ...state, 
                loading: true
            }
        case LAT_LONG_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload.locationData.data
            }
        case LAT_LONG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}