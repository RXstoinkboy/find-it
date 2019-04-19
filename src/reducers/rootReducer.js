import {combineReducers} from 'redux'

import {exampleReducer} from './exampleReducer'
import {contactModal} from './contactModal'
import {heroPicturesReducer} from './heroPicturesReducer'

export default combineReducers({
    exampleReducer,
    contactModal,
    heroPicturesReducer
})