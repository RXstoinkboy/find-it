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
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

mock.onGet(`/v3/autocomplete?text=test&latitude=1&longitude=1&locale=pl_PL`).reply(200, {
    results: 'that'
})

const mockStore = configureStore([thunk]);
const store = mockStore({});

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

    it(`returns proper results from autocomplete endpoint`, ()=> {
        const expectedActions = [
            {type: AUTO_START},
            {type: AUTO_SUCCESS
                , payload: {
                results: {
                    results: 'that'
                }
            }
            }
        ]

        // axios.get(`/v3/autocomplete?text=test&latitude=1&longitude=1&locale=pl_PL`)

        return store.dispatch(autocomplete('test', 1, 1)).then(()=> {
            // const resolvedActions = store.getActions().map(action => action.type);
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})
