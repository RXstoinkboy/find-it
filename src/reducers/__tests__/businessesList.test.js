import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../../actions/types'
import {businessesList} from '../businessesList'

describe(`besinessesList`, ()=> {
    const initialState = {
        loading: false,
        error: null,
        businesses: [],
        total: 0,
        offset: 0,
    }

    it(`returns initialState when action is not recognized`, ()=> {
        const fakeAction = {type: 'ALOHA'};

        expect(businessesList(undefined, fakeAction)).toEqual(initialState)
    });
    it(`returns correct state when action is SEARCH_START`, ()=> {
        const action = {
            type: SEARCH_START
        }
        const expectedState = {
            ...initialState,
            loading: true
        }

        expect(businessesList(undefined, action)).toEqual(expectedState)
    });
    it(`returns correct state when action is SEARCH_SUCCESS`, ()=> {
        const action = {
            type: SEARCH_SUCCESS,
            payload: {
                data: {
                    businesses: [1,2],
                    total: 10
                },
            }
        }
        const expectedState = {
            ...initialState,
            businesses: [1,2],
            total: 10
        }

        expect(businessesList(undefined, action)).toEqual(expectedState)
    });
    it(`returns correct state when action is SEARCH_FAILURE`, ()=> {
        const action = {
            type: SEARCH_FAILURE,
            payload: {
                error: 'ojoj'
            }
        }
        const expectedState = {
            ...initialState,
            error: 'ojoj'
        }

        expect(businessesList(undefined, action)).toEqual(expectedState)
    });
})