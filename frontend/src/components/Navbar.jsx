import { useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { cardData } from "../data/product.js"

const Navbar = () => {
    const user = useSelector((state) => state.user);
    // console.log(user.loggedIn);


    const [search, setSearch] = useState('')
    const [filteredData, setFilterData] = useState()

    const handleSearch = (e) => {
        setSearch(e.target.value)

        const filteredData = cardData.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterData(filteredData);


    }
    console.log(filteredData);

    return (
        <nav className="flex justify-around items-center font-[Poppins] shadow-md h-20  border-b border-gray-300">
            <div>
                <Link to="/" className="flex text-3xl font-bold">

                    <h1>ELECTROMART</h1>
                </Link>
            </div>
            <div className="flex items-center justify-center text-gray-700 gap-10 text-xl">

                <Link className="hover:text-black hover:underline  focus:underline" to="/">Home</Link>
                <Link className="hover:text-black hover:underline focus:underline" to="/allproducts">All Products</Link>
                <Link className="hover:text-black hover:underline focus:underline" to="/contact">Contact</Link>
                <Link className="hover:text-black hover:underline focus:underline" to="/about">About</Link>
                {user.loggedIn ? (
                    <Link className="hover:text-black hover:underline focus:underline" to="/cart">Cart</Link>
                ) : (
                    <Link className="hover:text-black hover:underline focus:underline" to="/signup">Signup/Login</Link>
                )}
            </div>
            <div>
                <div className="flex justify-around items-center border bg-gray-500  w-64 rounded-md">
                    <input
                        className=" p-2 w-full rounded-l-sm bg-gray-300 focus:outline-none"
                        placeholder="What are you looking for?"
                        type="text"
                        value={search}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button className="p-2  bg-gray-500  rounded-r-md">
                        <img src="/image/search.png" alt="Search" className=" " />
                    </button>
                </div>
               
                {search && (
                    <div className="absolute z-10 mt-2 bg-white border w-64 rounded-md shadow-lg">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <Link to={`/allproducts/${item.id}`}
                                    key={item.id}
                                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 object-center mr-2"
                                    />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">${item.currentPrice}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="p-2 text-gray-500 text-sm">No results found</p>
                        )}
                    </div>
                )}
                 
            </div>

        </nav>
    )
}

export default Navbar