import {
    SEARCH_KEYWORD,
    AUTO_START,
    AUTO_SUCCESS,
    AUTO_FAILURE
} from '../../actions/types'
import {data} from '../data'

describe(`data reducer`, ()=> {
    const initialState = {
        keywordToSearch: '',
        loading: false,
        error: null,
        autocompleteResults: {}
    };

    it(`returns initialState if action is not recognised`, ()=> {
        const fakeAction = {type: 'FAKE'};
        const expectedState = {
            ...initialState
        }
        
        expect(data(undefined, fakeAction)).toEqual(expectedState)
    })
    it(`returns correct state if action is AUTO_START`, ()=> {
        const action = {type: AUTO_START};
        const expectedState = {
            ...initialState,
            loading: true
        }

        expect(data(undefined, action)).toEqual(expectedState)
    })
    it(`returns correct state if action is AUTO_SUCCESS`, ()=> {
        const action = {
            type: AUTO_SUCCESS,
            payload: {
                results: [1,2]
            }
        };
        const expectedState = {
            ...initialState,
            autocompleteResults: [1,2]
        }

        expect(data(undefined, action)).toEqual(expectedState)
    })
    it(`returns correct state if action is AUTO_FAILURE`, ()=> {
        const action = {
            type: AUTO_FAILURE,
            payload: {
                error: 'bad req'
            }
        };
        const expectedState = {
            ...initialState,
            error: 'bad req'
        }

        expect(data(undefined, action)).toEqual(expectedState)
    })
})