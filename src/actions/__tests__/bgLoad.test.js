import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {BG_LOAD_START, BG_LOAD_SUCCESS} from '../types'
import {bgLoad} from '../bgLoad'
// import moxios from 'moxios'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(`async bgLoad action`, ()=> {

        beforeEach(()=>{
            moxios.install()
        })

        afterEach(()=>{
            moxios.uninstall()
        })
        
        it(`creates BG_LOAD_SUCCESS when data has been fetched`, ()=> {
        const fetchedData = [{
            image: 'this is example image',
            name: 'my name is image',
            url: 'this is example link'
        }]
        
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: fetchedData
            })
        })
        // axios.get.mockResolvedValue(fetchedData);
        
        const expectedActions = [
            {type: BG_LOAD_START},
            {type: BG_LOAD_SUCCESS,
                payload: {
                    bgImage: fetchedData[0].image,
                    name: fetchedData[0].name,
                    url: fetchedData[0].url,
                }
            }
        ]

        const store = mockStore({});

        return store.dispatch(bgLoad()).then(()=>{
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})