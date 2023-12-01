import React from 'react'
import './contact-us.css'


export default function ContactUs() {
  return (
    <div>
        <div className="content ">
    <h1 className='center mb-4'>Contact Us</h1>
    <div className="contact-form">
        <form action="#" method="post">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div className="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group center">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>

    </div>
  )
}
