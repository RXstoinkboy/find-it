import {contactModal} from '../contactModal'
import {TOGGLE_CONTACT_MODAL} from '../../actions/types'

describe('contactModal reducer', ()=>{
    it('initial state is returned if action is not recognized',()=>{
        const action = {type: 'dummy test'};
        const initialState = false;

        expect(contactModal(undefined, action)).toEqual(initialState);
    })

    it('returnes true if TOGGLE_CONTACT_MODAL is dispatched',()=>{
        const action = {type: TOGGLE_CONTACT_MODAL};
        const expectedState = true;

        expect(contactModal(undefined, action)).toEqual(expectedState);
    })
})