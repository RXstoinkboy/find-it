import React from 'react';
import {shallow, mount} from 'enzyme'
import {MemoryRouter} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

// components
import {App} from '../App'
import Header from '../Header'
import Navigation from '../Navigation'
import Home from '../Home'
import Buy from '../Buy'
import Sell from '../Sell'
import AboutUs from '../AboutUs'
import Contact from '../Contact'
import Footer from '../Footer'

const mockStore = configureStore();
const store = mockStore();

describe('App component', ()=>{
    it('renders correctly', ()=>{
        shallow(<App />)
    })

    it('shows correct components when pathname="/"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
    it('shows correct components when pathname="/buy"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/buy']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Buy)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
    it('shows correct components when pathname="/sell"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/sell']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Sell)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
    it('shows correct components when pathname="/about%20us"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/about%20us']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(AboutUs)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
    it('shows correct components when pathname="/contact"', ()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/contact']}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>
        );
        
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Contact)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
})