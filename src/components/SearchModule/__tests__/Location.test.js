import React from 'react'
import {Location} from '../Location'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

it(`Location renders correctly`, ()=> {
    const mockFn = jest.fn();
    const location = shallow(<Location city='New York' handleCity={mockFn}/>)

    expect(toJson(location)).toMatchSnapshot()
})