// import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center font-[Poppins] shadow-md h-24" >
        <div >
            <h1 className="text-4xl font-bold ">
            ELECTROMART
            </h1>
        </div>
        <div className="flex items-center justify-center text-gray-700 gap-12 text-2xl " >
            {/* <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
            <Link to="/">Signup</Link> */}
            <a className="hover:text-black hover:underline " href="">Home</a>
            <a className="hover:text-black hover:underline " href="">Contact</a>
            <a className="hover:text-black hover:underline " href="">About</a>
            <a className="hover:text-black hover:underline " href="">Signup</a>
        </div>
        <div className="" >
          <input className="bg-gray-300 p-3 " placeholder="What are you looking for?" type="text" />
        </div>
        
    </nav>
  )
}

export default Navbar