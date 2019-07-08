import {combineReducers} from 'redux';
import search from './search';
import products from './products';
import itemEditing from './itemEditing';

const myReducer=combineReducers({
    search,
    products,
    itemEditing
});

export default myReducer;
