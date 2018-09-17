import { combineReducers } from 'redux';
import categories from './categories';
import editCategories from './editcategories';
import products from '../products/products';
import editProducts from '../products/editProducts';


const appReducers = combineReducers({
    categories,
    editCategories,
    products,
    editProducts,



});

export default appReducers;