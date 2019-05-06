import React from 'react'
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'
import {MemoryRouter} from 'react-router'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {App} from '../App'
// import Home from '../Home'
// import {ProductList} from '../ProductList'
// import {Product} from '../Product'
// import Logo from '../Logo'

describe('App', ()=>{
    const mockStore = configureStore();
    const store = mockStore();

    const bgLoadMock = jest.fn();
    const geolocationMock = jest.fn();
    
    it('renders correctly', ()=> {
        shallow(
            <Provider store={store}>
                <App bgLoad={bgLoadMock} geolocation={geolocationMock}/>
            </Provider>
        )
    });

    // it('display correct components when path is "/"', ()=>{
    //     const wrapper = shallow(
    //         <MemoryRouter initialEntries={['/']}>
    //             <Provider store={store}>
    //                 <App />
    //             </Provider>
    //         </MemoryRouter>
    //     )
    //     console.log(wrapper.children())
        
        // expect(wrapper.find(Home)).toHaveLength(1);
        // expect(wrapper.find(ProductList)).toHaveLength(0);
        // expect(wrapper.find(Product)).toHaveLength(0);
        // expect(wrapper.find(Logo).prop('large')).toEqual(true);

        // wrapper.unmount()
    // })
    
    // it('display correct components when path is "/businesses/:category"', ()=>{
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/businesses/example']}>
    //             <Provider store={store}>
    //                 <App />
    //             </Provider>
    //         </MemoryRouter>
    //     )
        
    //     expect(wrapper.find(Home)).toHaveLength(0);
    //     expect(wrapper.find(ProductList)).toHaveLength(1);
    //     expect(wrapper.find(Product)).toHaveLength(0);
    // })

    // it('display correct components when path is "/businesses/:category/:exampleProduct"', ()=>{
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/businesses/example/somePlace']}>
    //             <Provider store={store}>
    //                 <App />
    //             </Provider>
    //         </MemoryRouter>
    //     )
        
    //     expect(wrapper.find(Home)).toHaveLength(0);
    //     expect(wrapper.find(ProductList)).toHaveLength(0);
    //     expect(wrapper.find(Product)).toHaveLength(1);
    // })
})