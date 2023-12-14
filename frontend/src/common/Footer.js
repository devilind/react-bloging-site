import React, {useRef, useState, useEffect} from 'react'
import './footer.css'

export default function Footer() {
    const emailRef = useRef()
    const [subscribed, updateSubscribe] = useState(false);
    const LOCAL_STORAGE_SUBSCRIBE = 'subscribed';

    useEffect(() => {
        const storedSub = localStorage.getItem(LOCAL_STORAGE_SUBSCRIBE);
        console.log('here')
        if (storedSub === 'true') {
            updateSubscribe(true)
        }
    }, [])

    function handleResub() {
        localStorage.setItem(LOCAL_STORAGE_SUBSCRIBE, false);
        updateSubscribe(false)
    }
    async function handleSubmit() {
        if(emailRef.current.value === '') return alert('Email must be filled.')
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if (emailRef.current.value.match(emailRegex) === null) return alert('Email is not valid.')
        let data = {
            'name': '',
            'email': emailRef.current.value,
        }
        console.log(emailRef.current.value)
        try{
            const response = await fetch('/.netlify/functions/api/subscribe', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.status === 200){
                const email = emailRef.current.value;
                emailRef.current.value = null;
                return alert(`${email} Subscribed Sucessfully!! `)
            }
            if(response.status === 201){
                const email = emailRef.current.value;
                emailRef.current.value = null;
                return alert(`${email} is already Subscribed!!`)
            }
            else{
                return alert('Please try again later. In maintenance!!')
            }
        } catch(err){
        }
    }

    return (
        <>
            <br />
            <div className='line-seperator'></div>
            <div className='footer-box'>
                <div className="company-info">
                    <h3>KnowinGly</h3>
                    <p>Mumbai, INDIA.</p>
                    <p>Email: Knowingly@gmail.com</p>
                    <div className="social-icons">
                        <a href="www.facebook.com" target="_blank">Facebook</a>
                        <a href="www.twitter.com" target="_blank">Twitter</a>
                        <a href="www.instagram.com" target="_blank">Instagram</a>
                        {/* <!-- Add more social media icons as needed --> */}
                    </div>
                </div>
                <div className='subscribe-box'>
                    <span>
                    Subscribe to never miss our latest blogs.
                    </span>
                    
                    <input className='input-box' ref={emailRef} placeholder='Enter your email'/>
                    <button onClick={()=> {handleSubmit()}} className='subscribe-btn'>Subscribe</button>
                    
                </div>
            </div>

            <div className="footer">
                <p>&copy; 2023 Knowingly Domain. All rights reserved.</p>
            </div>

        </>
    );
}
