import {
    GEOLOCATION_START,
    GEOLOCATION_SUCCESS,
    GEOLOCATION_FAILURE
} from '../types'
import { 
    geolocation, 
    geolocationFailure, 
    geolocationSuccess, 
    geolocationStart 
} from '../geolocation'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const store = mockStore();

describe(`geolocation`, ()=> {
    afterEach(()=>{
        store.clearActions()
    })
    it(`geolocationStart returns correct action`, ()=> {
        const expectedActions = [{type: GEOLOCATION_START}];

        store.dispatch(geolocationStart());
        expect(store.getActions()).toEqual(expectedActions);
    })
    it(`geolocationSuccess returns correct action`, ()=> {
        const expectedActions = [
            {
                type: GEOLOCATION_SUCCESS,
                payload: {
                    lat: 1,
                    long: 1
                }
            }
        ];

        store.dispatch(geolocationSuccess(1, 1));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it(`geolocationFailure returns correct action`, ()=> {
        const expectedActions = [
            {type: GEOLOCATION_FAILURE, payload: {err: 'err'}}
        ];

        store.dispatch(geolocationFailure('err'));
        expect(store.getActions()).toEqual(expectedActions);
    })
})