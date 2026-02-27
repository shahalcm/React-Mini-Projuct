import React from 'react'
import "./App.css"
import Navbar from './components/mainsection/Navbar'
import Main from './components/mainsection/Main'
import Footer from './components/mainsection/Footer'
import ProductList from './components/productList/ProductList'

const App = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default App