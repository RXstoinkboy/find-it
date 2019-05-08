import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from './types'
import axios from 'axios'

export const getBusinessesList = (term, location) => {
    return dispatch => {
        dispatch(searchStart());

        return axios.get(`/v3/businesses/search?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
            .then(res => dispatch(searchSuccess(res)))
            .catch(error => dispatch(searchFailure(error)))
    }
}

export const searchStart = () => {
    return {
        type: SEARCH_START
    }
}

export const searchSuccess = data => {
    return {
        type: SEARCH_SUCCESS,
        payload: {
            data
        }
    }
}

export const searchFailure = error => {
    return {
        type: SEARCH_FAILURE,
        payload: {
            error
        }
    }
}