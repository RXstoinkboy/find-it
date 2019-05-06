import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {BG_LOAD_START, BG_LOAD_SUCCESS} from '../types'
import {bgLoad} from '../bgLoad'
// import moxios from 'moxios'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);


describe(`async bgLoad action`, ()=> {
    mock.onGet('/bgImages', {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    }).reply(200, {
        data: {
            photos: [
                'one',
                'two',
                'three'
            ],
            name: 'mockName',
            ulr: 'mockUrl'
        }
    })

        // beforeEach(()=>{
        //     moxios.install()
        // })

        // afterEach(()=>{
        //     moxios.uninstall()
        // })
        
        it(`creates BG_LOAD_SUCCESS when data has been fetched`, ()=> {
        // const fetchedData = [{
        //     image: 'this is example image',
        //     name: 'my name is image',
        //     url: 'this is example link'
        // }]
        
        // moxios.wait(()=>{
        //     const request = moxios.requests.mostRecent();
        //     request.respondWith({
        //         status: 200,
        //         response: fetchedData
        //     })
        // })
        // axios.get.mockResolvedValue(fetchedData);
        
        // axios.get('/bgImages')
        //     .then(res => {
        //         console.log(res);

        //     })
        //     .catch(err => console.log(err))

        const expectedActions = [
            {type: BG_LOAD_START},
            {type: BG_LOAD_SUCCESS,
                payload: {
                    bgImage: 'one',
                    name: 'mockName',
                    url: 'mockUrl',
                }
            }
        ]

        const store = mockStore({bgImages:{collectedData:[]}});

        return store.dispatch(bgLoad('/bgImages', 0)).then(()=>{
            // console.log(store.getActions());
        //         expect(store.getActions()).toEqual(expectedActions)
            })
    })
})