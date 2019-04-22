import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Logo from '../Logo.js'

test('Logo renders correctly', ()=>{
    const comp = shallow(<Logo />)

    expect(toJson(comp)).toMatchSnapshot()
})