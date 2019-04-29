import {
    BG_LOAD_START, 
    BG_LOAD_SUCCESS, 
    BG_LOAD_FAILURE,
    NEXT_SLIDE,
    PREV_SLIDE
} from '../actions/types'

const initialState = {
    currentImage: 0,
    viewportWidth: 0,
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
                viewportWidth: window.innerWidth,
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
        case NEXT_SLIDE:
            if(state.currentImage === state.collectedData.length - 1){
                return {
                    ...state,
                    currentImage: 0
                }
            }
            return {
                ...state,
                currentImage: state.currentImage + 1
            }
        case PREV_SLIDE:
            if(state.currentImage === 0){
                return {
                    ...state,
                    currentImage: state.collectedData.length - 1
                }
            }
            return {
                ...state,
                currentImage: state.currentImage - 1
            }
        default:
            return state
    }
}