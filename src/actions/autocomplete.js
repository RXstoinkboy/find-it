import {
    AUTO_START,
    AUTO_SUCCESS,
    AUTO_FAILURE
} from './types'

import axios from 'axios'

export const autocomplete = (keyword, lat, long) => {
    return dispatch => {
        dispatch(autoStart());

        return axios.get(`/v3/autocomplete?text=${keyword}&latitude=${lat}&longitude=${long}&locale=pl_PL`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
            .then(res => dispatch(autoSuccess(res.data)))
            .catch(error => dispatch(autoFailure(error)))
    }
}

export const autoStart = () => {
    return {
        type: AUTO_START
    }
}

export const autoSuccess = results => {
    return {
        type: AUTO_SUCCESS,
        payload: {
            results
        }
    }
}

export const autoFailure = error => {
    return {
        type: AUTO_FAILURE,
        payload: {
            error
        }
    }
}