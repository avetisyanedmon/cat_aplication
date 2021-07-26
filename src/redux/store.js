import { createStore } from "redux";
import { combineReducers } from 'redux';
import { categoryReducer } from "./features/categoryReducer";
import { numberReducer } from "./features/numberReducer";



const store = createStore(combineReducers({
    number:numberReducer,
    categories: categoryReducer
}),{
    number: 10,
    categories: '',
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;