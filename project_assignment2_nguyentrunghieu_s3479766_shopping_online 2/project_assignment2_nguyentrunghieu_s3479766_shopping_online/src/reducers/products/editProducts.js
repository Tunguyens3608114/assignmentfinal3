import * as Types from '../constants/actionTypesProducts';

var initialState = {};

const editProducts = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default editProducts;
