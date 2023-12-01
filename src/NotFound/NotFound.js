import React from 'react';
import './notfound.css';
import { useLottie } from "lottie-react";
import InProgress from '../lottie/in-progress.json';


export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: InProgress,
  }
  const { View } = useLottie(defaultOptions);
  return (
    <div className="notfound-container">
        <div className="text">Coming Soon!!!</div>
        <div className='lottie-in-progress'>{View}</div>
    </div>
  )
 
}
