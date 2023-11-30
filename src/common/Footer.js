import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <br />
            <div class='line-seperator'></div>
            <div className='footer-box'>
                <div class="company-info">
                    <h3>KnowinGly</h3>
                    <p>Mumbai, INDIA.</p>
                    <p>Email: Knowingly@gmail.com</p>
                </div>
                <div class="social-icons">
                    <a href="www.facebook.com" target="_blank">Facebook</a>
                    <a href="www.twitter.com" target="_blank">Twitter</a>
                    <a href="www.instagram.com" target="_blank">Instagram</a>
                    {/* <!-- Add more social media icons as needed --> */}
                </div>
            </div>
            
            <div class="footer">
                <p>&copy; 2023 Knowingly Domain. All rights reserved.</p>
            </div>

        </>
    );
}
