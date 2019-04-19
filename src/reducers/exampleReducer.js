import {EXAMPLE} from '../actions/types';

export const exampleReducer = (state = {}, action) => {
    switch (action.type){
        case EXAMPLE:
            return 'hello';
        default:
            return state
    }
}