import * as Types from './../reducers/constants/actionTypes';
import callApi from './../reducers/utils/apiCaller';

export const actFetchCategoriesRequest = () => {
    return dispatch => {
        return callApi('productTypes', 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data));
        });
    };
}

export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORIES_SUCCESS,
        categories
    }
}

export const actDeleteCategoryRequest = (_id) => {
    return dispatch => {
        return callApi(`productTypes/${_id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteCategory(_id));
        })
    }
}

export const actDeleteCategory = (_id) => {
    return {
        type : Types.DELETE_CATEGORY,
        _id
    }
}

export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return callApi('productTypes', 'POST', category).then(res => {
            dispatch(actAddCategory(res.data));
        });
    }
}

export const actAddCategory = (category) => {
    return {
        type : Types.ADD_CATEGORY,
        category
    }
}

export const actGetCategoryRequest = (_id) => {
    return dispatch => {
        return callApi(`productTypes/${_id}`, 'GET', null).then(res => {
            dispatch(actGetCategory(res.data));
        });
    }
}

export const actGetCategory = (category) => {
    return {
        type : Types.EDIT_CATEGORY,
        category
    }
}

export const actUpdateCategoryRequest = (category) => {
    return dispatch => {
        return callApi(`productTypes/${category._id}`, 'PUT', category).then(res => {
            dispatch(actUpdateCategory(res.data));
        });
    }
}

export const actUpdateCategory = (category) => {
    return {
        type : Types.UPDATE_CATEGORY,
        category
    }
}
