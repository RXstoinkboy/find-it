import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
} from '../types'
import {
    searchStart,
    searchSuccess,
    searchFailure
} from '../getBusinessesList' 
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
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
})