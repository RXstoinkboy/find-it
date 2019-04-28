import {
    BG_LOAD_START, 
    BG_LOAD_SUCCESS, 
    BG_LOAD_FAILURE} from '../actions/types'

const initialState = {
    loading: false,
    collectedData: [],
    error: null
}

export const bgImages = (state = initialState, action) => {
    switch(action.type){
        case BG_LOAD_START:
            return {
                ...state,
                loading: true
            }
        case BG_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                collectedData: [
                    ...state.collectedData,
                    {
                        name: action.payload.name,
                        image: action.payload.bgImage,
                        url: action.payload.url
                    }
                ]
            }
        case BG_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}