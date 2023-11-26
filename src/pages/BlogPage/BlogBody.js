import React from 'react';
import './blogbody.css';
import '../../common/common.css'
import Content from './Content';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

export default function BlogBody() {
  return (
    <>
    <div class ='body'>
    <div class='p-4'>
      <Header/>
    </div>
    <div>
    <div class='container py-4'>
    
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
