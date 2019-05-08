import React from 'react'
import toJson from 'enzyme-to-json'
import {shallow} from 'enzyme'
import {Home} from '../Home'

test(`Home renders as expected`, ()=> {
    const home = shallow(<Home />)

    expect(toJson(home)).toMatchSnapshot()
})