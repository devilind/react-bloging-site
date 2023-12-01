import React from 'react'
import { NavLink } from 'react-router-dom'
import './contentcard.css'

export default function ContentCard() {
  return (
    <>
      <div className='left-to-right-flex'>
        <div className='image-box'></div>
        <div className='content-box'>
          <p className="fs-5 fw-bolder">Learn why the stock market and individual stocks tend to fluctuate.</p>
          <p>Private Companies list themselves under any Stock Exchange like NSE, BSE, Forex and etc. for extending their company shares to retail
            owners and get listed as Public Company. These individual shares aka Stocks have prices which varies. This variation in stock's pricing mainly due to the supply and demand of the stock.
            If supply is higher than the demand then stock price goes down, otherwise if demand is high and supply is low then price goes up.
            So, for simplicity we can say if more people are interested in a certain stock then.....</p>
          <NavLink className='read-btn' to='/market'>Continue reading...</NavLink>
        </div>
      </div>

      <br /><br />
    </>
  )
}
