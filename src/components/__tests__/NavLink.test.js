import React from 'react'
import NavLink from '../NavLink'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

describe('NavLink', ()=>{
    it('renders correctly',()=>{
        const wrapper = shallow(<NavLink name='about us'/>);
        
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
