import { Route, Routes } from "react-router-dom";
import React from 'react'
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import BlogBody from './pages/BlogPage/BlogBody.js';
import Home from './pages/Home/Home.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import About from './pages/About/About.js';
import NotFound from "./NotFound/NotFound.js";
import './App.css';
import BlogHomePage from "./pages/Bloghome/BlogHomePage.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    
      <div className="custom-body">
        <div className='linear-gradient-bg'>
          <div className='p-4'>
            <Header />
          </div>
          <div className="page-body">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blogs' element={<BlogHomePage />} />
              <Route path='/blog/:id' element={<BlogBody />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>

      </div>


  );
}

export default App;
