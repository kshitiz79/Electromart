import React from 'react'
import { cardData } from '../../data/product.js'
import Card from '../../components/Card'

const AllProducts = () => {
  return (
    <>
    <div className='flex justify-start items-center gap-10 flex-wrap w-[80%] mx-auto mt-20 mb-20' >

    {cardData.map(card=>(  
        <Card key={card.id} card={card} />
    ))}
    </div>
    </>
  )
}

export default AllProducts