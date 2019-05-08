import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {CitiesMod} from '../CitiesMod'

it(`CitiesMod renders correctly`, ()=> {
    const props = {
        city: 'krakow',
        focus: false,
        cities: [1,2],
        handlePickCity: jest.fn() 
    }

    const citiesMod = shallow(
        <CitiesMod {...props} />
    )

    expect(toJson(citiesMod)).toMatchSnapshot()
})