import Card from "../../components/Card"
import Hero from "./Hero"
import SelectCategory from "./SelectCategory"
import { cardData } from "../../data/product"

function Home() {
  console.log(cardData);
  
  return (
    <>
    <Hero/>
    <div className="flex gap-5 items-center justify-center">
      
{cardData.map(card=>(  
  <Card card={card} />
))}
      
    </div>
      <SelectCategory/>
    </>
  )
}

export default Home