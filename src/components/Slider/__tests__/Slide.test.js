import React from 'react'
import {Slide} from '../Slide'
import toJson from 'enzyme-to-json'
import {shallow} from 'enzyme'

const imageMock = {
    url: 'some example url',
    name: 'hello example'
}

test(`Slide renders correctly`, ()=> {
    const slide = shallow(<Slide image={imageMock}/>);

    expect(toJson(slide)).toMatchSnapshot()
} )