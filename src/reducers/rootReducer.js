import {combineReducers} from 'redux'

import {bgImages} from './bgImages'
import {location} from './location'
import {data} from './data'

export default combineReducers({
    bgImages,
    location,
    data
})