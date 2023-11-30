import {  Route, Routes } from "react-router-dom";
import React from 'react'
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import BlogBody from './pages/BlogPage/BlogBody.js';
import Home from './pages/Home/Home.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import About from './pages/About/About.js';
import '../src/App.css';
import BlogHomePage from "./pages/Bloghome/BlogHomePage.js";


function App() {
  
  return (
    <body>
    <div className='linear-gradient-bg'>
      <div class='p-4'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogHomePage />} />
        <Route path='/market'  element={<BlogBody />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>

    </body>



  );
}

export default App;
