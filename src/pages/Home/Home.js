import React, { useRef, useState, useEffect } from 'react'
import './home.css';

import teamWork from '../../Static/Videos/team-working.mp4';
import LatestBlogCards from './LatestBlogCards';


export default function Home() {
    
    const emailRef = useRef()
    const nameRef = useRef()
    // const [subscribed, updateSubscribe] = useState(false);
    const LOCAL_STORAGE_SUBSCRIBE = 'subscribed';

    

    
    async function handleSubmit() {
        if(nameRef.current.value.length === 0 ) return alert('Name must be filled.')
        if(nameRef.current.value.length > 30 ) return alert('Name is too large')
        if(emailRef.current.value.length > 50 ) return alert('Email is not valid/Too large.')
        if(emailRef.current.value === '') return alert('Email must be filled.')
        let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
        if (emailRef.current.value.match(emailRegex) === null) return alert('Email is not valid.')
        let data = {
            'name': nameRef.current.value,
            'email': emailRef.current.value,
        }
        console.log(emailRef.current.value)
        try{
            const response = await fetch('/subscribe', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.status === 200){
                const name = nameRef.current.value;
                const email = emailRef.current.value;
                emailRef.current.value = null;
                nameRef.current.value = null;
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
        <div>
            <div className='header-box'>
                <img src="knowingly.png" width="200"></img>
                <p>
                    Where Ideas Spark and Words Ignite – KnowinGly, your daily rendezvous with inspiration
                    and insight. Unleash the power of words, explore uncharted realms, and let curiosity be
                    your guide. This is more than a blog; it's a journey through the extraordinary. Welcome to
                    the epicenter of thought-provoking tales and boundless creativity – your digital sanctuary
                    for discovery!
                </p>
            </div>
            <div className='additional-content'>
                <div >
                    <hr className='hr-2'></hr>
                    <span className='content-title'>Latest Blogs</span>
                    <hr className='hr-2'></hr>
                </div>
                <div className='latest-blog-section'>
                   <LatestBlogCards/>
                </div>
                <div className='our-team'>
                    <div>
                        <hr className='hr-2'></hr>
                        <span className='content-title'>Our Team</span>
                        <hr className='hr-2'></hr>
                    </div>
                    <video autoPlay loop muted>
                        <source src={teamWork} type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                    <span className='our-team-text'>
                        Meet the faces behind Knowingly, a diverse group of individuals united by a shared passion for knowledge and
                        communication. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit urna ac justo
                        bibendum, ac bibendum orci scelerisque. Curabitur laoreet ligula at nunc vehicula, vel consectetur metus
                        ultrices.
                    </span>
                </div>
                <div className='subscribe-section'>
                    <div >
                        <hr className='hr-2'></hr>
                        <span className='content-title'>Subscribe</span>
                        <hr className='hr-2'></hr>
                    </div>
                    <div className='subscribe-split-section'>
                        <div className='subscribe-group'>
                            <div className='form'>
                                <span>Never miss our latest Blogs</span>
                                <input ref={nameRef} className='input-box' placeholder='Name' ></input>
                                <input ref={emailRef} className='input-box' placeholder='Email' ></input>
                                <label htmlFor='subscribe'><input type='checkbox' id="subscribe" value="true" /> I wish to recieve notification for upcoming latest blogs.</label>
                                <button onClick={() => {handleSubmit()}} className='subscribe-btn' type="submit">Subscribe</button>
                            </div>
                        </div>
                        <div className='subscribe-group'>
                            <ul>
                                <span>Why subscribe to our Newsletter?</span>
                                <li>Stay Informed with Latest Content.</li>
                                <li>Exclusive Content and Insights.</li>
                                <li>Receive Regular Updates.</li>
                                <li>Special Offers and Discounts.</li>
                                <li>Personalized Content Recommendations.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
