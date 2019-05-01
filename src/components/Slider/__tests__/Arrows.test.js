import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ArrowRight} from '../ArrowRight'
import {ArrowLeft} from '../ArrowLeft'

describe(`Arrows`, ()=> {
    const prevSlideMock = jest.fn()
    const nextSlideMock = jest.fn()

    it(`render correctly`, ()=> {
        const right = shallow(<ArrowRight onClick={nextSlideMock} nextSlide={nextSlideMock} />);
        const left = shallow(<ArrowLeft onClick={prevSlideMock} prevSlide={prevSlideMock} />);

        expect(toJson(right)).toMatchSnapshot();
        expect(toJson(left)).toMatchSnapshot();
    })
})