import React from 'react';
import './homepage.css'
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Content from './Content';

export default function HomePage() {
  return (
    <>
    <div class ='home-body'>
    <div class='p-4'>
      <Header/>
    </div>
    <div>
    <link rel='stylesheet' src='./blogbody.css'></link>
    <div class='container py-4'>
    <div class='title center'>
    <p class='fs-2 fw-bolder'>Latest Blogs</p>
    <p class='fs-5'>Learning about new things anywhere, anytime made easy.</p>
    <p class=''>By Atul Rathour</p>
    </div>
    <div>
        <Content/>
    </div>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
    </>
  )
}
