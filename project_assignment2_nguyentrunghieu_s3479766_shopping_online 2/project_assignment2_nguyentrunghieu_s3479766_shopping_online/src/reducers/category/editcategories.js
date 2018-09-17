import * as Types from './../constants/actionTypes';

var initialState = {};

const editCategories = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_CATEGORY:
            state = action.category;
            return state;
        default:
            return state;
    }
}

export default editCategories;
