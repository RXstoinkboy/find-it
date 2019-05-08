import {
    LAT_LONG_START,
    LAT_LONG_SUCCESS,
    LAT_LONG_FAILURE
} from '../types'
import {
    latLongStart,
    latLongSuccess,
    latLongFailure
} from '../latLong'
import configureStore from 'redux-mock-store'
import { escapeComponent } from 'uri-js';

const mockStore = configureStore();
const store = mockStore();

describe(`latLong action`, ()=> {
    afterEach(()=> {
        store.clearActions()
    })

    it(`latLongStart dispatches correct action`, ()=> {
        const expectedActions = [{type: LAT_LONG_START}]

        store.dispatch(latLongStart());
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`latLongSuccess dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: LAT_LONG_SUCCESS,
            payload: {
                locationData: {lat: 1, long: 2}
            }
        }]

        store.dispatch(latLongSuccess({lat: 1, long: 2}));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`latLongFailure dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: LAT_LONG_FAILURE,
            payload: {
                error: 'there was error'
            }
        }]

        store.dispatch(latLongFailure('there was error'));
        expect(store.getActions()).toEqual(expectedActions)
    })
})