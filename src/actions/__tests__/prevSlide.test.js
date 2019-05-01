import configureStore from 'redux-mock-store'

import {PREV_SLIDE} from '../types'
import {prevSlide} from '../prevSlide'

const mockStore = configureStore();
const store = mockStore();

describe(`prevSlide`, ()=> {
    beforeEach(()=> {
        store.clearActions();
    })

    it(`dispatches correct action`, ()=> {
        const expectedActions = [
            {
                'type': PREV_SLIDE
            }
        ]

        store.dispatch(prevSlide());
        expect(store.getActions()).toEqual(expectedActions);
    })
})