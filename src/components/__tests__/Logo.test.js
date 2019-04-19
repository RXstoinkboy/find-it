import React from 'react'
import Logo from '../Logo'
import {shallow, mount} from 'enzyme'
import {MemoryRouter} from 'react-router'

test('<Logo /> renders correctly', ()=>{
    shallow(<Logo />)
})

// zły test - trzeba przepisac
test('Clicking on <Logo /> redirects to "/"',()=>{
    const logo = mount(
        <MemoryRouter initialEntries={['/test']} >
            <Logo />
        </MemoryRouter>
    )
    window.location = jest.fn();
    console.log(`path before clicking: ${window.location.pathname}`);


    logo.simulate('click');

    console.log(`path after clicking: ${window.location.pathname}`);

    expect(window.location.pathname).toEqual('/');
})