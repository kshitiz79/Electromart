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
    </Routes>
   <Footer/>
   </>
  )
}

export default App
