import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <br />
            <div className='line-seperator'></div>
            <div className='footer-box'>
                <div className="company-info">
                    <h3>KnowinGly</h3>
                    <p>Mumbai, INDIA.</p>
                    <p>Email: Knowingly@gmail.com</p>
                </div>
                <div className="social-icons">
                    <a href="www.facebook.com" target="_blank">Facebook</a>
                    <a href="www.twitter.com" target="_blank">Twitter</a>
                    <a href="www.instagram.com" target="_blank">Instagram</a>
                    {/* <!-- Add more social media icons as needed --> */}
                </div>
            </div>
            
            <div className="footer">
                <p>&copy; 2023 Knowingly Domain. All rights reserved.</p>
            </div>

        </>
    );
}
