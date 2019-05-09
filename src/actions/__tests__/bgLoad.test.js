import {BG_LOAD_START, BG_LOAD_SUCCESS, BG_LOAD_FAILURE, AUTO_START, AUTO_SUCCESS} from '../types'
import {bgLoad, bgLoadStart, bgLoadSuccess, bgLoadFailure} from '../bgLoad'
// import moxios from 'moxios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

mock.onGet(`/v3/businesses/LVXDZ167oWvRSyPDt9q18g`).reply(200, {
    photos: ['1', '2', '3'],
    name: 'test',
    url: 'testUrl'
})
// const middlewares = [thunk];

const mockStore = configureStore([thunk]);
const store = mockStore({});


describe(`actions are called correctly`, ()=> {
    afterEach(()=>{
        store.clearActions()
    })
    it(`bgLoadStart creates correct action`, ()=> {
        const expectedActions = [{type: BG_LOAD_START}]
        
        store.dispatch(bgLoadStart());
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`bgLoadSuccess creates correct action`, ()=> {
        const expectedActions = [
            {
                type: BG_LOAD_SUCCESS, 
                payload: {
                    bgImage: 'hello',
                    name: 'name',
                    url: 'www.hello.com'
                }
            }
        ]
        
        store.dispatch(bgLoadSuccess('hello', 'name', 'www.hello.com'));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it(`bgLoadFailure creates correct action`, ()=> {
        const expectedActions = [
            {
                type: BG_LOAD_FAILURE, 
                payload: {
                    error: 'ojoj'
                }
            }
        ]
        
        store.dispatch(bgLoadFailure({error: 'ojoj'}));
        expect(store.getActions()).toEqual(expectedActions)
    })

    it(`bgLoad return proper actions and payload`, ()=> {
        const expectedActions = [
            {type: BG_LOAD_START},
            {type: BG_LOAD_SUCCESS,
                payload: {
                    bgImage: '1',
                    name: 'test',
                    url: 'testUrl'
                }
            }
        ]

        return store.dispatch(bgLoad('/v3/businesses/LVXDZ167oWvRSyPDt9q18g')).then(()=> {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})