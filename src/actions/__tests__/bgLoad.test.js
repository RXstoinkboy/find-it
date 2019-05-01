import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {BG_LOAD_START, BG_LOAD_SUCCESS} from '../types'
import {bgLoad} from '../bgLoad'
import axios from 'axios'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const fetchedData = [{
    image: 'this is example image',
    name: 'my name is image',
    url: 'this is example link'
}]

jest.mock('axios');

describe(`async bgLoad action`, ()=> {
    // afterEach(()=> {
    //     store.clearActions()
    // })

    it(`creates BG_LOAD_SUCCESS when data has been fetched`, ()=> {
        axios.get.mockResolvedValue(fetchedData);

        const expectedActions = [
            {
                type: BG_LOAD_START,
            },
            {
                type: BG_LOAD_SUCCESS,
                payload: {
                    bgImage: fetchedData[0].image,
                    name: fetchedData[0].name,
                    url: fetchedData[0].url
                }
            }
        ]

        // const store = mockStore({});

        store.dispatch(bgLoad());
        expect(store.getActions('this is example link', 0)).toEqual(expectedActions)
        
    })
})