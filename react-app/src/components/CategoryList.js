import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/categories/');
      const responseData = await response.json();
      setCategories(responseData.categories);
    }
    fetchData();
  }, []);

  const categoryComponents = categories.map((category) => {
    return (
      <li key={category.id}>
        {/* <NavLink to={`/categories/${category.id}`}>{category.category_name}</NavLink> */}
      </li>
    );
  });

  return (
    <>
      <h1>Category List: </h1>
      <ul>{categoryComponents}</ul>
    </>
  );
}

export default CategoryList;
