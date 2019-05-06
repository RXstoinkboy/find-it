import {SET_CITY} from '../types'
import {setCity} from '../setCity'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const store = mockStore();

test(`setCity return correct action`, ()=> {
    const expectedActions = [
        {
            type: SET_CITY,
            payload: {
                value: 'ccc'
            }
        }
    ]

    store.dispatch(setCity('ccc'));
    expect(store.getActions()).toEqual(expectedActions)
})