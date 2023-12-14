import React from 'react'
import { Link } from 'react-router-dom'
import './contentcard.css'

export default function ContentCard({blog}) {
  
  return (
    <>
      <div className='left-to-right-flex'>
        <img src={blog.image} className='image-box'></img>
        <div className='content-box'>
          <div className='content-box-title'>{blog.title}</div>
          <span>{blog.description.substring(0,480)}.....</span>
          <Link className='read-btn' to={`/blog/${blog._id}`}>Continue reading...</Link>
        </div>
      </div>
      <br/><br/>
    </>
  )
}
