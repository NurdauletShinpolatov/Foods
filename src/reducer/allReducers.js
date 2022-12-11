import { combineReducers } from "redux";
import categoriesReducer from "../redux/categoriesSlice"
import productsReducer from "../redux/productsSlice";

const allReducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})

export default allReducers