import {
    GEOLOCATION_START,
    GEOLOCATION_SUCCESS,
    GEOLOCATION_FAILURE,
    GET_LOCATION_START,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE,
    SET_CITY
} from '../../actions/types'
import {location, initialState} from '../location'

describe(`location reducer`, ()=> {
    it(`returns initialState when action is not recognised`, ()=> {
        const fakeAction = {type: 'FAKE_ACTION'};
        expect(location(undefined, fakeAction)).toEqual(initialState)
    })
    it(`updates state as expected when action is GEOLOCATION_START`, ()=> {
        const geoStart = {type: GEOLOCATION_START};
        expect(location(undefined, geoStart)).toEqual({...initialState, loading: true})
    })
    it(`updates state as expected when action is GEOLOCATION_SUCCESS`, ()=> {
        const geoSuccess = {type: GEOLOCATION_SUCCESS, payload: {lat: 1, long: 1}};
        expect(location(undefined, geoSuccess)).toEqual({
                ...initialState, 
                lat: 1,
                long: 1
            })
    })
    it(`updates state as expected when action is GEOLOCATION_FAILURE`, ()=> {
        const geoFail = {
            type: GEOLOCATION_FAILURE, 
            payload: {
                err: 'error'
            }
        };
        expect(location(undefined, geoFail)).toEqual({
                ...initialState, 
                error: 'error'
            })
    })
    it(`updates state as expected when action is GET_LOCATION_START`, ()=> {
        const getLocStart = {type: GET_LOCATION_START};
        expect(location(undefined, getLocStart)).toEqual({
                ...initialState, 
                loading: true
            })
    })
    it(`updates state as expected when action is GET_LOCATION_SUCCESS`, ()=> {
        const getLocSuccess = {type: GET_LOCATION_SUCCESS, payload: { city: 'ccc'}};
        expect(location(undefined, getLocSuccess)).toEqual({
                ...initialState, 
                city: 'ccc'
            })
    })
    it(`updates state as expected when action is GET_LOCATION_FAILURE`, ()=> {
        const getLocFail = {
            type: GET_LOCATION_FAILURE, 
            payload: {
                err: 'error'
            }
        };
        expect(location(undefined, getLocFail)).toEqual({
                ...initialState, 
                error: 'error'
            })
    })
    it(`updates state as expected when action is SET_CITY`, ()=> {
        const setCity = {type: SET_CITY, payload: { value: 'ccc'}};
        expect(location(undefined, setCity)).toEqual({
                ...initialState, 
                city: 'ccc'
            })
    })
})