import React from 'react'

const CartCard = ({cardData}) => {
    // console.log(cardData);
    
  return (
    <div  className='flex mt-5  items-center py-6 shadow-3xl' >
                <div className='ml-16 w-30 flex items-center justify-start gap-2'>
                    <img className='h-[10%] w-[10%]' src={cardData.image} alt="" />
                    <h1 className='ml-2 text-xs'>{cardData.name.slice(1,19)}...</h1>
                </div>
                <h1 className='ml-6 mr-64'>${cardData.currentPrice}</h1>
                <h1 className='mr-64 ml-5'>2</h1>
                <h1 className='ml-10'>${cardData.currentPrice*2}</h1>
            </div>
  )
}

export default CartCard