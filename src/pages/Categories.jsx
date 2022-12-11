import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchedCategories, fetchingCategories, fetchingError } from '../redux/categoriesSlice'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Categories = () => {
  const { categories, loading, error } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingCategories)
    axios.get("https://themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        dispatch(fetchedCategories(res.data.categories))
      })
      .catch((err) => {
        dispatch(fetchingError())
      })
  }, [])

  if (loading) return <center className="text-xl text-gray-500 font-medium">loading...</center>
  if (error) return <center className="text-xl text-red-400 font-medium">Something went wrong</center>
  return (
    <div className='flex flex-wrap w-1/8 mx-auto container grid mt-10'>
      {
        categories.map((item) =>(
          <div key={item.idCategory} className="shadow-md p-2 rounded-md flex items-center justify-center flex-col">
            <img src={item.strCategoryThumb} alt={item.strCategory} />
            <div>
              <Link to={`/products/${item.strCategory}`}><h3 className='font-meduim text-lg txt-gray-700'>{item.strCategory}</h3></Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Categories