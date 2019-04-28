import React from 'react'
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'
import {MemoryRouter} from 'react-router'

import {App} from '../App'
import {Home} from '../Home'
import {ProductList} from '../ProductList'
import {Product} from '../Product'
import Logo from '../Logo'

describe('App', ()=>{
    it('renders correctly', ()=> {
        shallow(<App />)
    });

    it('display correct components when path is "/"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
        
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(ProductList)).toHaveLength(0);
        expect(wrapper.find(Product)).toHaveLength(0);
        expect(wrapper.find(Logo).prop('large')).toEqual(true);

        wrapper.unmount()
    })
    
    it('display correct components when path is "/businesses/:category"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/businesses/example']}>
                <App />
            </MemoryRouter>
        )
        
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(ProductList)).toHaveLength(1);
        expect(wrapper.find(Product)).toHaveLength(0);
    })

    it('display correct components when path is "/businesses/:category/:exampleProduct"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/businesses/example/somePlace']}>
                <App />
            </MemoryRouter>
        )
        
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(ProductList)).toHaveLength(0);
        expect(wrapper.find(Product)).toHaveLength(1);
    })
})