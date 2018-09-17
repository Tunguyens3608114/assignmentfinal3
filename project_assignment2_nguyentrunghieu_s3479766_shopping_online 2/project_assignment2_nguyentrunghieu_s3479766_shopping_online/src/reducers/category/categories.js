import * as Types from '../constants/actionTypes';
var initialState = [];

var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.id === id) {
            result = index;
        }
    });
    return result;
}

const categories = (state = initialState, action) => {
    var index = -1;
    var { id, category } = action;
    switch (action.type) {
        case Types.FETCH_CATEGORIES_SUCCESS:
            state = action.categories;
            return [...state];
        case Types.DELETE_CATEGORY:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_CATEGORY:
            state.push(action.category);
            return [...state];
        case Types.UPDATE_CATEGORY:
            index = findIndex(state, category.id);
            state[index] = category;
            return [...state];
        default: return [...state];
    }
};

export default categories;
