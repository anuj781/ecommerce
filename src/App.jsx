import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import View from "./pages/View"

function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/view" element={<View/>}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
