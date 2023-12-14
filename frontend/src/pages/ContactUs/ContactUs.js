import React, { useRef, useState, useEffect } from 'react'
import './contact-us.css'
import rightTick from '../../lottie/right-tick.png';

export default function ContactUs() {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: rightTick,
    // }
    // const { View } = useLottie(defaultOptions);
    const nameRef = useRef()
    const emailRef = useRef()
    const mesageRef = useRef()
    const [messaged, updateMessage] = useState(false);
    const LOCAL_STORAGE_MESSAGE = 'contacted';

    useEffect(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_MESSAGE);
        if (storedTodos === 'true') {
            updateMessage(true)
        }
    }, [])

    function handleResend() {
        localStorage.setItem(LOCAL_STORAGE_MESSAGE, false);
        updateMessage(false)
    }

    async function handleSubmit() {
        if(nameRef.current.value === '') return alert('Name must be filled.')
        if(emailRef.current.value === '') return alert('Email must be filled.')
        if(mesageRef.current.value === '') return alert('Message must be filled.')
        let emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i
        if (emailRef.current.value.match(emailRegex) === null) return alert('Email is not valid.')
        let data = {
            'name': nameRef.current.value,
            'email': emailRef.current.value,
            'message': mesageRef.current.value
        }
        try{
            const response = await fetch('/.netlify/functions/api/contact-us', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.status === 200){
                localStorage.setItem(LOCAL_STORAGE_MESSAGE, true);
                updateMessage(true)
            }
            else{

            }
        } catch(err){
        }
        // nameRef.current.value = null
        // emailRef.current.value = null
        // mesageRef.current.value = null
    }
    // console.log(messaged + '---1')
    return (
        messaged ? <div className='response-msg'>
            <h3>We have received your message. </h3>
            <span>You will hear from us soon.</span>
            <img src={rightTick} className='lottie-right-tick'/>
            <h4>Thank you for your valuable feedback!</h4>
            <h5>Send another message</h5>
            <button onClick={() => {handleResend()}}> Resend </button>
        </div> :
            <div>
                <div className="content ">
                    <h1 className='center mb-4'>Contact Us</h1>
                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" ref={nameRef} id="name" name="name" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" ref={emailRef} id="email" name="email" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" ref={mesageRef} name="message" rows="5" required></textarea>
                        </div>
                        <div className="form-group center">
                            <button onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
    )
}
