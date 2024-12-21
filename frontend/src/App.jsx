import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import AllProducts from './pages/allproducts/AllProducts'
import SinglePage from './pages/singleProductPage/SinglePage'

import Cart from './pages/cart/Cart'
import CheckOut from './pages/checkout/CheckOut'

function App() {


  return (
   <>
   <Notification/>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/singleproduct" element={<SinglePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
   <Footer/>
   </>
  )
}

export default App
