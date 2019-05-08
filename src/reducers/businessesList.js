import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../actions/types'

const initialState = {
    loading: false,
    error: null,
    businesses: [],
    total: 0,
    offset: 0,
    // region: {}
}

export const businessesList = (state = initialState, action) => {
    switch (action.type){
        case SEARCH_START:
            return {
                ...state,
                loading: true
            };
        case SEARCH_SUCCESS:
            console.log(action.payload.data);
            return {
                ...state,
                loading: false,
                businesses: action.payload.data.businesses,
                total: action.payload.data.total
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}