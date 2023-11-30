import React from 'react';
import './notfound.css';
import Lottie from "lottie-react"


export default function NotFound() {
  return (
    <div class="notfound-container">
        <div class="text">404 Not Found</div>
        <img src={require('./not-found.gif')} alt="Not Found GIF" className="gif"></img>
    </div>
  )
}
