import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingProducts, fetchedProducts, fetchingerror, addToBasket, removeFromBasket } from '../redux/productsSlice'
import axios from "axios"

const Products = () => {
  const { products, basket } = useSelector(state => state.products)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingProducts())
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
      .then((res) => {
        dispatch(fetchedProducts(res.data.meals))
      })
  }, [params])

  const addToBasketFunc = (item) => {
    dispatch(addToBasket(item))
  }
  const removeFromBasketFunc = (id) => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='container grid'>
      {
        products?.map((item) => (
          <div className='p-2 shadow-md rounded-md' key={item.idMeal}>
            <img className='cart-img' src={item.strMealThumb} alt={item.strMeal} />
            <div className='flex flex-col justify-center align-center text-center'>
              <h3 className='mt-2 mb-4 h-8'>{item.strMeal}</h3>
              {
                basket.find(prod => prod.idMeal === item.idMeal) ? (
                  <div>
                    <span onClick={() => removeFromBasketFunc(item.idMeal)} className='mt-2 px-4 py-2 rounded-lg text-white bg-orange-400 active:opacity-70 cursor-pointer'>-</span>
                    <span className='px-4 mt-2 mx-2 py-2 rounded-md bg-gray-200'>{basket.find(prod => prod.idMeal === item.idMeal)?.count}</span>
                    <span onClick={() => addToBasketFunc(item)}  className='mt-2 px-4 py-2 rounded-lg text-white bg-green-500 active:opacity-70 cursor-pointer'>+</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => addToBasketFunc(item)} 
                    className='mt-2 px-4 py-2 rounded-lg text-white bg-blue-500 w-full active:opacity-70'
                  >
                    Add to cart
                  </button>                  
                )
              }
            </div>
          </div>          
        ))
      }
    </div>
  )
}

export default Products