import {SEARCH_KEYWORD} from '../types'
import {searchKeyword} from '../searchKeyword'
import configureStore from 'redux-mock-store'

const mockStore = configureStore();
const store = mockStore();

it(`searchKeyword dispatches correct action and payload`, ()=> {
    const expectedActions = [{
        type: SEARCH_KEYWORD,
        payload: {
            keywordToSearch: 'magic'
        }
    }]

    store.dispatch(searchKeyword('magic'));
    expect(store.getActions()).toEqual(expectedActions);

    store.clearActions()
})