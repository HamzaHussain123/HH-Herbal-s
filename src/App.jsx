import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Products from './SubComponents/Products';
import AllProducts from './Components/AllProducts';
import Products_Oil from './SubComponents/Products_Oil';
import Products_serum from './SubComponents/Products_serum';
import Products_Oil2 from './SubComponents/Products_Oil2';
import Products_Combo1 from './SubComponents/Products_Combo1';
import Products_C2 from './SubComponents/Products_C2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />

        <Route path="/product" element={<Products />} />
        <Route path="/product/Oil" element={<Products_Oil />} />
        <Route path="/product/Serum" element={<Products_serum />} />
        <Route path="/product/oil2" element={<Products_Oil2 />} />
        <Route path="/product/combo1" element={< Products_Combo1 />} />
        <Route path="/product/C2" element={< Products_C2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App
