import {
    AUTO_START,
    AUTO_SUCCESS,
    AUTO_FAILURE
} from '../types'
import {
    autocomplete,
    autoStart,
    autoSuccess,
    autoFailure
} from '../autocomplete'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const store = mockStore();

describe(`autocomplete module`, ()=> {
    afterEach(()=> {
        store.clearActions()
    })

    it(`autoStart dispatches correct action`, ()=> {
        const expectedActions = [{type: AUTO_START}];

        store.dispatch(autoStart());
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`autoSuccess dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: AUTO_SUCCESS,
            payload: {
                results: 'something'
            }
        }];

        store.dispatch(autoSuccess('something'));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`autoFailure dispatches correct action and payload`, ()=> {
        const expectedActions = [{
            type: AUTO_FAILURE,
            payload: {
                error: 'error'
            }
        }];

        store.dispatch(autoFailure('error'));
        expect(store.getActions()).toEqual(expectedActions)
    })
})
