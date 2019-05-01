import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {Slider} from '../Slider'

const mockProps = {
    collectedData: [],
    currentImage: 0,
    viewportWidth: 1000,
    prevSlide: jest.fn(),
    nextSlide: jest.fn()

}

it(`Slider renders correctly`, ()=>{
    const slider = shallow(<Slider {...mockProps}/>)

    expect(toJson(slider)).toMatchSnapshot()
})