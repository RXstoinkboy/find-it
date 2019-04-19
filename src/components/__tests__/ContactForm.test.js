import React from 'react'
import {shallow, mount} from 'enzyme'
import configureStore from 'redux-mock-store'

// import ContactForm from '../ContactForm'
// import ContactModal from '../ContactModal'
import {ContactForm} from '../ContactForm'
import {ContactModal} from '../ContactModal'
import {toggleContactModal} from '../../actions/toggleContactModal'

const mockStore = configureStore();
const store = mockStore({contactModal: false});

const mockFn = jest.fn();

describe('Contact components', ()=>{
    it('<ContactModal /> renders correctly', ()=>{
        shallow(<ContactModal />)
    })
    
    it('<ContactForm /> renders correctly', ()=>{
        shallow(<ContactForm toggleContactModal={mockFn} />)
    })

});

describe('In contact form link',()=>{
    const link = shallow(<ContactForm toggleContactModal={mockFn}/>)
    const modalWrapper = shallow(<ContactModal />);

    it('toggleContactModal function is called upon clicking ContactForm',()=>{
        expect(modalWrapper.find('#modal').hasClass('modal')).toBe(false);
        link.simulate('click');

        expect(mockFn.mock.calls.length).toBe(1);
    })
})

describe('ContactModal', ()=>{
    it('should render correctly when contactModal prop is true',()=>{
        const wrapper = shallow(<ContactModal contactModal={true} />);
        expect(wrapper.find('#shade').prop('className')).toEqual('shade');
        expect(wrapper.find('#modal').prop('className')).toEqual('modal');
    })

    it('should not be visible when contactModal prop is false',()=>{
        const wrapper = shallow(<ContactModal contactModal={false} />);
        expect(wrapper.find('#modal').prop('className')).toEqual('invisibleModal');
        expect(wrapper.find('#shade').prop('className')).toEqual('invisibleShade');
    })
    
    it('toggleContactModal function should be called after clicking on shade element',()=>{
        const mockFn = jest.fn();
        const wrapper = shallow(<ContactModal contactModal={true} toggleContactModal={mockFn} />);
        wrapper.find('#shade').simulate('click');
        expect(mockFn.mock.calls.length).toBe(1);
    })
})