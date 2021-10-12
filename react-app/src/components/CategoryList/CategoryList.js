import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCategoriesThunk } from "../../store/categories";
import './CategoryList.css'

function CategoryList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesThunk())
  }, [dispatch])


  const categories = useSelector(state => state.categories.categories)
  return(
    <div>
      <div className='category_nav_container'>
        <ul className='category_nav'>
          {console.log('LIST OF CATEGORIES', categories)}
          {categories?.map((category) => (
            <Link to={`/categories/${category.id}`}><li key={category.id}>{category.name}</li></Link>
          ))}
        </ul>
      </div>
    </div>
  )


}

export default CategoryList;
