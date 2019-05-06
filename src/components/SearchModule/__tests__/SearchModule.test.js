import React from 'react'
import {SearchModule} from '../SearchModule'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

it(`SearchModule renders correctly`, ()=> {
    const search = shallow(<SearchModule />)

    expect(toJson(search)).toMatchSnapshot()
})