import {
    SEARCH_KEYWORD,
    AUTO_START,
    AUTO_SUCCESS,
    AUTO_FAILURE
} from '../actions/types'

const initialState = {
    keywordToSearch: '',
    loading: false,
    error: null,
    autocompleteResults: {}
};

export const data = (state = initialState, action) => {
    switch (action.type){
        case SEARCH_KEYWORD:
            return {
                ...state,
                keywordToSearch: action.payload.keywordToSearch
            }
        case AUTO_START:
            return {
                ...state,
                loading: true
            };
        case AUTO_SUCCESS:
            return {
                ...state,
                loading: false,
                autocompleteResults: action.payload.results
            }
        case AUTO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}