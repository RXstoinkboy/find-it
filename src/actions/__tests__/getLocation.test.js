import {
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
} from '../types'
import {
    getLocationStart,
    getLocationSuccess,
    getLocationFailure
} from '../getLocation'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const store = mockStore();

describe(`getLocation`, ()=> {
    afterEach(()=>{
        store.clearActions()
    })
    it(`getLocationStart returns correct action`, ()=> {
        const expectedActions = [{type: GET_LOCATION_START}];

        store.dispatch(getLocationStart());
        expect(store.getActions()).toEqual(expectedActions);
    })
    it(`getLocationSuccess returns correct action`, ()=> {
        const expectedActions = [
            {
                type: GET_LOCATION_SUCCESS,
                payload: {
                    city: 'New York'
                }
            }
        ];

        store.dispatch(getLocationSuccess('New York'));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it(`getLocationFailure returns correct action`, ()=> {
        const expectedActions = [
            {
                type: GET_LOCATION_FAILURE,
                payload: {
                    err: 'bad error'
                }
            }
        ];

        store.dispatch(getLocationFailure('bad error'));
        expect(store.getActions()).toEqual(expectedActions);
    })
})