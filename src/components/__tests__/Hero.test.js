import React from 'react'
import {Hero} from '../Hero'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Hero component', ()=>{
    it('renders correctly',()=>{
        const wrapper = shallow(<Hero />);

        expect(toJson(wrapper)).toMatchSnapshot();
    })
})