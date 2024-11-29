import cell from "../../assets/cell.png"

const SelectCategory = () => {
    return (
      <div className="flex flex-col w-[80%] bg-blue-200 mx-auto my-5" >
          <div><h1>catagory</h1></div>
          <div className="flex justify-between"> 
              <h1>Brows by category</h1>
              <div>
  
              <span>{`<`}</span>
              <span>{`>`}</span>
              </div>
               </div>
          <div className="flex gap-5">
              <button>
                  <img src={cell} alt="" />
                  <h3>Phone</h3>
              </button>
          </div>
      </div>
    )
  }
  
  export default SelectCategory