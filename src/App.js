import {  Route, Routes } from "react-router-dom";
import React from 'react'
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import BlogBody from './pages/BlogPage/BlogBody.js';
import Home from './pages/Home/Home.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import About from './pages/About/About.js';
import NotFound from "./NotFound/NotFound.js";
import '../src/App.css';
import BlogHomePage from "./pages/Bloghome/BlogHomePage.js";
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  
  return (
    
    <div className='linear-gradient-bg'>
      <div className='p-4'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogHomePage />} />
        <Route path='/market'  element={<BlogBody />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/*' element={<NotFound />} />
        
      </Routes>
      <div>
        <Footer />
      </div>
    </div>

    



  );
}

export default App;
