import React from 'react'
import './home.css'
export default function Home() {
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
                <div className='custom-card-section'>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
                </div>
            </div>
            <div className='additional-content'></div>
        </div>
    )
}
