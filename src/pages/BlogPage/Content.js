import React from 'react'
import './content.css'
export default function Content() {
    return (
        <>
        <div>
            <div className='title center'>
                <p className='fs-2 fw-bolder'>Why does stock price rise or fall?</p>
                <p className='fs-4'>Learn why the stock market and individual stocks tend to fluctuate.</p>
                <p className=''>By Atul Rathour – Updated Nov 14, 2023 at 1:47PM</p>
            </div>
            <br />
            <div className='py-4'>
                <div className='left-to-right-flex'>
                    <div className='image-box'></div>
                    <div className='content-box'>
                        <p>Private Companies list themselves under any Stock Exchange like NSE, BSE, Forex and etc. for extending their company shares to retail
                            owners and get listed as Public Company. These individual shares aka Stocks have prices which varies. This variation in stock's pricing mainly due to the supply and demand of the stock.
                            If supply is higher than the demand then stock price goes down, otherwise if demand is high and supply is low then price goes up.
                            So, for simplicity we can say if more people are interested in a certain stock then chances are share price will grow and, if people
                            are not much interested in the stock, decline in prices can be seen.</p>
                        <p className='fw-bolder'>Points Proved: Buy when people are scared, sell when people are greedy.</p>
                    </div>
                </div>
                <br />
                
                <div className='right-to-left-flex'>
                    <div className='image-box'></div>
                    <div className='content-box'>
                        <p className="fs-5 fw-bolder">Next question would be how stocks supply and demand increases or decreases?</p>
                        <p>There are many factors affecting supply and demand of shares/stock, but one of the important factors is the Sector
                            in which a certain share belongs to. What growth can be predicted in the subject sector can easily and heavily manipulate stock growth.
                        </p>
                        <p>
                            Suppose there is an ABC Company LTD. Working in the Pharma Sector having shares priced at 100 Rs today, and a report has been generated the same day that there is going to be huge growth in the pharma industry due to some external reason,
                            then next day price will increase suppose 110 Rs. In the same manner, there is this Company XYZ Private Ltd. Priced at 100Rs working in the energy sector, the same day some report has been generated by ABN(Imaginary trusted reporters) that
                            the energy sector will see a huge decline, next day price will get down to 90 Rs.</p>
                        <p className='fw-bolder'>Points Proved: Stocks of companies working in sectors which have future growth, have best chances of growth.</p>
                    </div>
                </div>
                <br />
                <div>

                <p className='fw-bolder'>What are the other factors that affect the prices of Stocks other than supply and demand? </p>
                <p>As discussed earlier there are other factors as well other than future growth of the sector, affecting supply and demand of the stocks in the market.</p>
                <p className="fs-5">Other factors affecting the pricing of Stocks in the Market are as follows: </p>
                </div>
                <ol>
                    <div className='left-to-right-flex'>
                        <div className='image-box'></div>
                        <div className='content-box'>
                            <li><p className='fs-5 fw-bold'>Inflation</p></li>
                            <p>As we all know, inflation itself is the result of high demand and low supply. If the supply decreases and demand remains
                                the same or increases, we can definitely see an upward rise in prices resulting in Inflation. But how does this high or
                                low inflation affect our stocks? Higher inflation can affect the purchasing power of the company. If raw materials required
                                materials go up, it shackles companies from buying raw materials required for production. Affecting the growth of the
                                company along with the share prices. If inflation is low, purchasing power increases, increasing production and overall
                                growth of Company along with shares. </p>
                            <p>Other situations can be during inflation Retail Owners of the shares may become
                                nervous about the economy and start selling some of their stocks. Leading increase in supply which will adversely affect
                                the share price, pressuring it to come down.</p>
                            <p>The most well-known indicator of inflation is the Consumer Price Index(CPI) know more about it.</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='right-to-left-flex'>
                        <div className='image-box'></div>
                        <div className='content-box'>
                            <li><p className='fs-5 fw-bold'>Company Activities</p></li>
                            <p>As we all know, inflation itself is the result of high demand and low supply. If the supply decreases and demand remains
                                the same or increases, we can definitely see an upward rise in prices resulting in Inflation. But how does this high or
                                low inflation affect our stocks? Higher inflation can affect the purchasing power of the company. If raw materials required
                                materials go up, it shackles companies from buying raw materials required for production. Affecting the growth of the
                                company along with the share prices. If inflation is low, purchasing power increases, increasing production and overall
                                growth of Company along with shares. </p>
                            <p>Other situations can be during inflation Retail Owners of the shares may become
                                nervous about the economy and start selling some of their stocks. Leading increase in supply which will adversely affect
                                the share price, pressuring it to come down.</p>
                            <p>The most well-known indicator of inflation is the Consumer Price Index(CPI) know more about it.</p>
                        </div>

                    </div>
                    <br />
                    <br />
                    <div className='left-to-right-flex'>
                        <div className='image-box'></div>
                        <div className='content-box'>
                            <li><p className='fs-5 fw-bold'>Economy</p></li>
                            <p>As we all know, inflation itself is the result of high demand and low supply. If the supply decreases and demand remains
                                the same or increases, we can definitely see an upward rise in prices resulting in Inflation. But how does this high or
                                low inflation affect our stocks? Higher inflation can affect the purchasing power of the company. If raw materials required
                                materials go up, it shackles companies from buying raw materials required for production. Affecting the growth of the
                                company along with the share prices. If inflation is low, purchasing power increases, increasing production and overall
                                growth of Company along with shares. </p>
                            <p>Other situations can be during inflation Retail Owners of the shares may become
                                nervous about the economy and start selling some of their stocks. Leading increase in supply which will adversely affect
                                the share price, pressuring it to come down.</p>
                            <p>The most well-known indicator of inflation is the Consumer Price Index(CPI) know more about it.</p>
                        </div>
                    </div>
                    <br />
                    <br />
                </ol>
                <p className='fs-4 fw-bolder'>Key Point Takeaways:</p>
                <ul>
                    <li><p className='fw-bolder'>Buy when people are scared, sell when people are greedy</p></li>
                    <li><p className='fw-bolder'>Stocks of companies working in sectors which have future growth, have best chances of growth</p></li>
                </ul>
            </div>
            </div>
        </>
    )
}
