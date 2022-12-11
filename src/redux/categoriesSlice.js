import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: [],
    loading: false,
    error: false
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        fetchingCategories: (state) => {
            state.loading = true
        },
        fetchedCategories: (state, action) => {
            state.loading = false
            state.categories = action.payload
        },
        fetchingError: (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const { fetchedCategories, fetchingCategories, fetchingError } = categoriesSlice.actions
const categoriesReducer = categoriesSlice.reducer
export default categoriesReducer