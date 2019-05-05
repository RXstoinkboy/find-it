import {SET_CITY} from './types'

export const setCity = value => {
    return {
        type: SET_CITY,
        payload: {
            value
        }
    }
}