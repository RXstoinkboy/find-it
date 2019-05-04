import {combineReducers} from 'redux'

import {bgImages} from './bgImages'
import {location} from './location'

export default combineReducers({
    bgImages,
    location
})