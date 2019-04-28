import {combineReducers} from 'redux'

import {exampleReducer} from './exampleReducer'
import {bgImages} from './bgImages'

export default combineReducers({
    exampleReducer,
    bgImages,
})