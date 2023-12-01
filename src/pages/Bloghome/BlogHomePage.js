import React from 'react';
import './bloghomepage.css'
import Content from './Content';

export default function BlogHomePage() {
  return (
    <>
    <div>
    <div className='container py-4'>
    <div className='title center'>
    <p className='fs-2 fw-bolder'>Latest Blogs</p>
    <p className='fs-5'>Learning about new things anywhere, anytime made easy.</p>
    <p className=''>By Atul Rathour</p>
    </div>
    <div>
        <Content/>
    </div>
    </div>
    </div>
  
    </>
  )
}
