
const Card = ({card}) => {
    // console.log(card);

    
    
  return (
    <div className="flex gap-3 justify-center items-center">
            <div key={card.id} className="h-96 w-72 " >
        <div className="h-3/4 w-full  bg-red-800" >
        <img  src={card.imageUrl} alt={card.name} />
        <span className="relative top-0" >-40%</span>
        
        </div>
        <div className="h-1/4 w-full bg-red-100">
        <h1>{card.name}</h1>
        <h1>{card.price}</h1>
        </div>
    </div>
    </div>
    
    
    
  )
}

export default Card