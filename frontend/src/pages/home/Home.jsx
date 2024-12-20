import Card from "../../components/Card"
import Hero from "./Hero"
import SelectCategory from "./SelectCategory"
import { cardData } from "../../data/product"
import { Link } from "react-router-dom"



function Home() {
  // console.log(cardData);

  return (
    <>
      <Hero />
      <div className="flex justify-center items-center flex-col" >
        <div className="flex gap-5 items-center mt-5 justify-center">
          {cardData.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
          <Link to="/allproducts"  className="mt-20 bg-red-500 rounded hover:bg-red-600 border text-white py-2 px-4" >All Products</Link>
      </div>
      <div className="mt-16">

        <SelectCategory />
      </div>
    </>
  )
}

export default Home