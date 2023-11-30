import React from 'react';
import './bloghomepage.css'
import Content from './Content';

export default function BlogHomePage() {
  return (
    <>
    <div>
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
  
    </>
  )
}
