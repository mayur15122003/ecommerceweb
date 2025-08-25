import React from 'react'
// import Home from "./pages/Home";
// import Header from './components/header'

// import About from "./pages/About";
// import Layout from './pages/Layout';
// import Contact from './pages/Contact';//

import { HashRouter, Route, Routes } from "react-router-dom";
//import Registration from "./components/registration";//
// import Register from "./components/Register";
import Section from './mackkproject/Components/Section'
import Header from './mackkproject/Components/Header'
import Footer from './mackkproject/Components/Footer'
// import Contact from './mackkproject/Components/Contact'
import Products from './mackkproject/Components/Products'
import Mproducts from './mackkproject/Components/Mproducts'
import Category from "./mackkproject/Components/Category"
// import Home from './mackkproject/Components/Home'
// import About from './mackkproject/Components/About' 
function App() {
  return (
    <>
      <HashRouter basename='/ecommerceweb'>
        <Header />
        <Routes >
          <Route element={<Section />} path="/" />
          <Route element={<Products />} path="/Products" />
          <Route element={<Mproducts />} path="/Mproducts" />
          <Route element={<Category />} path="/Category" />


          {/* <Route element={<Contact/>}path="/Contact"/>
        <Route element={<Products/>} path="/Products"/>
        <Route element={<Home/>}path="/Home"/>
        <Route element={<About/>}path="/About"/> */}

          {/* <Route element={<Registration/>}path='/'/> */}

          {/* <Route element={<Layout/>}path="/">
      <Route element={<Home/>}path=""Index/>
      <Route element={<About/>}path="About"/>
      <Route element={<Contact/>}path="Contact"/>
      </Route> */}
        </Routes>
        {<Footer />}
      </HashRouter>
    </>


  )

}
export default App 