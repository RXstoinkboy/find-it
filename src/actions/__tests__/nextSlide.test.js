import configureStore from 'redux-mock-store'

import {NEXT_SLIDE} from '../types'
import {nextSlide} from '../nextSlide'

const mockStore = configureStore();
const store = mockStore();

describe(`nextSlide`, ()=> {
    beforeEach(()=> {
        store.clearActions();
    })

    it(`dispatches correct action`, ()=> {
        const expectedActions = [
            {
                'type': NEXT_SLIDE
            }
        ]

        store.dispatch(nextSlide());
        expect(store.getActions()).toEqual(expectedActions);
    })
})