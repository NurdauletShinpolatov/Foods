import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    producst: [],
    loading: false,
    error: false,
    basket: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchingProducts: (state) => {
            state.loading = true
        },
        fetchedProducts: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        fetchingError: (state) => {
            state.loading = false
            state.error = true
        },
        addToBasket: (state, action) => {
            const index = state.basket.findIndex(item => item.idMeal === action.payload.idMeal)
            if (index === -1) {
                state.basket.push({...action.payload, count: 1 })
            } else {
                state.basket[index].count += 1
            }
        },
        removeFromBasket: (state, action) => {
            const currentItem = state.basket.find(item => item.idMeal === action.payload)
            if (currentItem.count === 1) {
                const newArray = state.basket.filter(item => item.idMeal !== action.payload)
                state.basket = newArray
                
                // state.basket.splice(state.basket.indexOf(currentItem))
            } else {
                currentItem.count -= 1
            }
        }
    }
})

export const { fetchedProducts, fetchingError, fetchingProducts, addToBasket, removeFromBasket } = productsSlice.actions
const productsReducer = productsSlice.reducer
export default productsReducer