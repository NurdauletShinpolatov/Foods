import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingProducts, fetchedProducts, fetchingerror, addToBasket, removeFromBasket } from '../redux/productsSlice'

const Basket = () => {
  const { basket } = useSelector(state => state.products)
  const dispatch = useDispatch()

  
  const addToBasketFunc = (item) => {
    dispatch(addToBasket(item))
  }
  const removeFromBasketFunc = (id) => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className='container'>
      {
        basket?.length ? (
          <div className='grid gap-4 grid-cols-3 grid-rows-3'>
            {
              basket.map((item) => (
                <div className='p-2 shadow-md rounded-md' key={item.idMeal}>
                  <img className='cart-img' src={item.strMealThumb} alt={item.strMeal} />
                  <div className='flex flex-col justify-center align-center text-center'>
                    <h3 className='mt-2 mb-10 h-8'>{item.strMeal}</h3>
                    {
                      <div>
                        <span onClick={() => removeFromBasketFunc(item.idMeal)} className='mt-2 px-4 py-2 rounded-lg text-white bg-orange-400 active:opacity-70 cursor-pointer'>-</span>
                        <span className='px-4 mt-2 mx-2 py-2 rounded-md bg-gray-200'>{basket.find(prod => prod.idMeal === item.idMeal)?.count}</span>
                        <span onClick={() => addToBasketFunc(item)}  className='mt-2 px-4 py-2 rounded-lg text-white bg-green-500 active:opacity-70 cursor-pointer'>+</span>
                      </div>
                    }
                  </div>
              </div>  
              ))
            }
          </div>
        ) : (
          <div>
            <center className="text-xl text-gray-500 font-medium">There isn't anything in the basket</center>
          </div>
        )
      }
    </div>
  )
}

export default Basket