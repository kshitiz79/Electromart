import React from 'react'

const CategoryCard = ({categoryData}) => {
    // console.log(categoryData);
    
  return (
    <button className='border-2 rounded-md py-6 px-10 hover:invert hover:bg-cyan-400 hover:border-black  ' >
        <img className='' src={categoryData.image} alt={categoryData.name} />
        <h1 className='mt-2'>{categoryData.name}</h1>
    </button>
  )
}

export default CategoryCard