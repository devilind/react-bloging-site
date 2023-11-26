import React from 'react'
import './common.css'

export default function Footer() {
    return (
        <>
        
        <br/>
        <div class='line-seperator'></div>
        
            <div class=' p-3 d-flex justify-content-center'>
                <div class='d-flex align-items-center gap-3 flex-column w-25'>
            <p class='center fs-5 fw-bolder'>Any Message For Us?</p>
                        <input type="text" class="form-control" placeholder='Enter Your Name'></input>
                        
                        <input type="text" class="form-control" placeholder='Enter Your Email'></input>
                        
                        <textarea class="form-control" rows="2" placeholder='Enter Your Message'></textarea>
                        
                        <button type='submit' class='button-38'>Send Message</button>
                   
                </div>
            </div>
            <div class='dark-strip'></div>
        </>
    );
}
