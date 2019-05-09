import {
    LAT_LONG_START,
    LAT_LONG_SUCCESS,
    LAT_LONG_FAILURE
} from '../types'
import {
    latLongStart,
    latLongSuccess,
    latLongFailure,
    latLong
} from '../latLong'
import configureStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

const mock = new MockAdapter(axios);
mock.onGet('/geo/cities?limit=5&namePrefix=test&sort=-population').reply(200, {
    data: 'hello'
})

const mockStore = configureStore([thunk]);
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

    it(`return expected actions and payload after using latLong`, ()=> {
        const expectedActions = [
            {type: LAT_LONG_START},
            {
                type: LAT_LONG_SUCCESS,
                payload: {
                    locationData: {data: 'hello'}
                }
            },
        ]

        return store.dispatch(latLong('test')).then(()=>{
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})