import React from 'react'
import toJson from 'enzyme-to-json'
import {shallow} from 'enzyme'
import {Home} from '../Home'

test(`Home renders as expected`, ()=> {
    const mockFn = jest.fn();
    const home = shallow(<Home city='New York' handleCity={mockFn}/>)

    expect(toJson(home)).toMatchSnapshot()
})