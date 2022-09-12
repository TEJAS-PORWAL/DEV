import React from 'react';
import './footer.css';

export default function Footer() {

    const email = 'info@agriverse.com';
    const fblink = 'https://facebook.com/theagriverse';
    const twtlink = 'https://twitter.com/theagriverse';
    const tellink = 'https://telegram.com';
    const yTubelink = 'https://youtube.com/channel/UCcstqRwtxzEJSz2ItuRdsSA';
    const Linkedlink = 'https://linkedin.com';
    const gitlink = 'https://github.com';
    const medlink = 'https://medium.com/@theagriverse';
    // const instlink = 'https://instagram.com/theagriverse';
    const Redditlink = 'https://reddit.com/r/theagriverse';
    return (
        <footer>
            <div className='top'>
                <form>
                    <h3 className='top--title'>Enter your email address for newsletter subscription</h3>
                    <input className='top--einput' type='email' placeholder='Your email address' />
                    <span></span>
                    <button className='top--btn' type='submit'>SUBSCRIBE</button>
                </form>
            </div>
            <div className="center">
                <div className="contact">
                    <h2 className="cont">Contact US</h2>
                </div>
            </div>
            <div className="links">
                <div className="center-first">
                    <div className="contact1">
                        <i class="fa-regular fa-globe"></i>
                        <h3>Address</h3> 
                        <address>google.com</address>
                   </div>
                </div>
                <div className="center-2">
                    <div className="contact2">
                        <i class="fa-sharp fa-solid fa-headset"></i>
                        <h3 className="support">Support</h3>
                        <address>yahoo.co.in</address>
                    </div>
                </div>
                <div className="center-3">
                    <div className="contact3">
                    <i class="fa-regular fa-envelope"></i>
                        <h3 className="Mark">Marketing</h3>
                        <address>brave.co.in</address>
                    </div>
                </div>
            </div>                   
            <div className='mid'>
                <div className='mid--left'>
                    <form className='mid--form'>
                        <h2 className='form--title'>Send a message</h2>
                        <div className='form--inputs'>

                            <input type='text' className='form--name' id='name' name='name' placeholder='Full Name' />
                            <input className='form--email' type='email' id='mail' name='email' placeholder='Email Address' />
                            <input className='form--mobile' type="tel" id='mobile' name='mobile' placeholder='Moblie' pattern="[0-9]{10}" maxlength="10" />
                            <input type="text" placeholder='Your Message'/>
                            
                        </div>
                        <button className='form--btn btn'>
                            <span className="noselect">SEND MESSAGE</span></button>

                    </form>
                </div>
                <div className='mid--right'>
                    <h2 className='right--title'>Join us in the community</h2>
                    <div className='mid--right--links'>
                        <a target="_blank" rel='noreferrer' href={fblink}><i className='fab fa-facebook-f'></i></a>
                        <a target="_blank" rel='noreferrer' href={Linkedlink}><i className='fab fa-linkedin-in'></i></a>
                        <a target="_blank" rel='noreferrer' href={twtlink}><i className='fab fa-twitter'></i></a>
                        <a target="_blank" rel='noreferrer' href={Redditlink}><i className='fab fa-reddit-alien'></i></a>
                        <a target="_blank" rel='noreferrer' href={tellink}><i className='fab fa-telegram'></i></a>
                        <a target="_blank" rel='noreferrer' href={medlink}><i className='fab fa-medium-m'></i></a>
                        <a target="_blank" rel='noreferrer' href={gitlink}><i className='fab fa-github-alt'></i></a>
                        <a target="_blank" rel='noreferrer' href={yTubelink}><i className='fab fa-youtube'></i></a>
                    </div>
                    <div className='mid--right--email'>
                        <a href={`mailto:${email}`}><i className="fa fa-envelope-o"></i> {email}</a>

                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p>&copy;2022. Designed by <a href="https://facebook.com/theagriverse">Mrlcreation</a></p>
            </div>
        </footer>
    )
}