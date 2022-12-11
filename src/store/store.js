import { configureStore } from '@reduxjs/toolkit';
import allReducers from "../reducer/allReducers";

const store = configureStore({
    reducer: allReducers,
    devTools: true
})

export default store