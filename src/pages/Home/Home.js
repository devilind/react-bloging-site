import React from 'react'
import './home.css'
import teamWork from '../../Static/Videos/team-working.mp4'
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

            </div>
            <div className='additional-content'>
                <div >
                    <hr className='hr-2'></hr>
                    <span className='content-title'>Latest Blogs</span>
                    <hr className='hr-2'></hr>
                </div>
                <div className='latest-blog-section'>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
                    <div className='custom-card'></div>
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
                                <form>
                                <span>Never miss our latest Blogs</span>
                                    <input className='input-box' placeholder='Name' ></input>
                                    <input className='input-box' placeholder='Email' ></input>
                                    <label for='subscribe'><input type='checkbox' id="subscribe" value="true"/> I wish to recieve notification for upcoming latest blogs.</label>
                                    <button className='subscribe-btn' type="submit">Subscribe</button>
                                </form>
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
