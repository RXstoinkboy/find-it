import {
    BG_LOAD_START, 
    BG_LOAD_SUCCESS, 
    BG_LOAD_FAILURE} from './types'

import axios from 'axios'

export const bgLoad = (url, pictureNumber) => {
    return dispatch => {
        dispatch(bgLoadStart());

        axios
            .get(url, {
                    headers: { Authorization: process.env.REACT_APP_API_KEY }   
                })
            .then(data => dispatch(bgLoadSuccess(data.photos[pictureNumber])))
            .catch(err => dispatch(bgLoadFailure(err)))
    }
}

const bgLoadStart = () => {
    return {
        type: BG_LOAD_START
    }
}

const bgLoadSuccess = bgImages => {
    return {
        type: BG_LOAD_SUCCESS,
        payload: {
            ...bgImages
        }
    }
}

const bgLoadFailure = error => {
    return {
        type: BG_LOAD_FAILURE,
        payload: {
            ...error
        }
    }
}