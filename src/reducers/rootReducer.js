import {combineReducers} from 'redux'

import {bgImages} from './bgImages'
import {location} from './location'
import {data} from './data'
import {businessesList} from './businessesList'

export default combineReducers({
    bgImages,
    location,
    data,
    businessesList
})