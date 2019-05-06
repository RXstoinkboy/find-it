import configureStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
import {BG_LOAD_START, BG_LOAD_SUCCESS, BG_LOAD_FAILURE} from '../types'
import {bgLoad, bgLoadStart, bgLoadSuccess, bgLoadFailure, fetchData} from '../bgLoad'
// import moxios from 'moxios'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// const mock = new MockAdapter(axios);

const mockStore = configureStore();
const store = mockStore();

describe(`actions are called correctly`, ()=> {
    beforeEach(()=>{
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
})
// describe(``, ()=> {
    // mock.onGet('/bgImages', {
    //     headers: {
    //         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    //     }
    // }).reply(200, {
    //     data: {
    //         photos: [
    //             'one',
    //             'two',
    //             'three'
    //         ],
    //         name: 'mockName',
    //         ulr: 'mockUrl'
    //     }
    // })

//     it()
        
// })
