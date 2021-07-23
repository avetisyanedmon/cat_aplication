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
})



export default store;