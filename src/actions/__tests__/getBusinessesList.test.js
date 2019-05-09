import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../types'
import {
    searchStart,
    searchSuccess,
    searchFailure,
    getBusinessesList
} from '../getBusinessesList' 
import configureStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

const mock = new MockAdapter(axios);
mock.onGet(`/v3/businesses/search?term=testTerm&location=testLoc&limit=20&offset=0`).reply(200, {
    data: 'hello'
})

const mockStore = configureStore([thunk]);
const store = mockStore();

describe(`getBusinessesList action`, ()=> {
    afterEach(()=> {
        store.clearActions()
    })

    it(`searchStart dispatches correct action`, ()=> {
        const expectedActions = [{type: SEARCH_START}];

        store.dispatch(searchStart());
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`searchSuccess dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: SEARCH_SUCCESS,
            payload: {
                data: [1,2]
            }
        }];

        store.dispatch(searchSuccess([1,2]));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`searchSuccess dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: SEARCH_FAILURE,
            payload: {
                error: 'something went wrong'
            }
        }];

        store.dispatch(searchFailure('something went wrong'));
        expect(store.getActions()).toEqual(expectedActions)
    })

    it(`return correct actions and payload while contacting API`, ()=> {
        const expectedActions = [
            {type: SEARCH_START},
            {
                type: SEARCH_SUCCESS,
                payload: {
                    data: {data: 'hello'}
                }
            }
        ]

        return store.dispatch(getBusinessesList('testTerm', 'testLoc')).then(()=> {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})