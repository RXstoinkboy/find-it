import {
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
} from '../types'
import {
    getLocationStart,
    getLocationSuccess,
    getLocationFailure,
    getLocation
} from '../getLocation'
import configureStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

const mock = new MockAdapter(axios);
mock.onGet('/v3/businesses/search?latitude=1&longitude=1').reply(200, {
    businesses: [
        {location: {city: 'testCity'}}
    ]
})

const mockStore = configureStore([thunk]);
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

    it(`return correct action and payload on getLocation`, ()=> {
        const expectedActions = [
            {type: GET_LOCATION_START},
            {
                type: GET_LOCATION_SUCCESS,
                payload: {
                    city: 'testCity'
                }
            }
        ]

        return store.dispatch(getLocation(1,1,null)).then(()=> {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})