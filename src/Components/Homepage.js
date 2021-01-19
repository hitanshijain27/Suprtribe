import React, {useState} from 'react'
import useStyles from './Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';
const Homepage=()=> {
    const [data, setData]= useState({
        email: "",
    });
    const {email}=data
    const handleChange = (e)=>{
        setData({...data,email:e.target.value});
    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const response= await fetch("https://v1.nocodeapi.com/hitanshi271999/google_sheets/uULfjmKquhzrAxZB?tabId=Sheet1",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' },
                body: JSON.stringify([[email,new Date().toLocaleString()]])
            });
            await response.json();
            setData({...data,email:""});
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div>
            <div>
            <h1 className= "center white">Instagram, YouTube, Facebook <span className="red">bringing engagement but not money?</span></h1>
            <h2 className= "center white">Now take control of your monetization with <span className="red">SUPRTRIBE</span>!</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
            <input className="text white" type="text" name="email" value={data.email} onChange={handleChange} placeholder="Enter your Email Address"/>
            <input className="Button" type="Submit" value="Join"/>
            </form>
            <h2 className="center white">Join the <span className="blue">early access waitlist</span>, Stand a chance to get free beta access before anyone!</h2>
            </div>
            <div className='flex'>
                <div className="section">
    

                    <h2 className="center white">Need for a Monetization-First App?</h2>
                    <h2 className="center white">To <span className="red">Protect Art and Artists </span>from being screwed!</h2>
                    <ul>
                        <li className="white">By not being able to grow as an artist in absence of economic freedom.</li>
                        <li className="white">By letting the big shots dictate terms for them and their monetization.</li>
                        <li className="white">By falling into the trap of the algorithms written to promote ads & not art or content.</li>
                    </ul>
                </div>
                <div className="section"> 
                    <h2 className="center white">Why <span className="red">SUPRTRIBE</span>?</h2>
                    <ul>
                        <li className="white"><strong className="blue">Monetize on your terms: </strong>The only person to tell you whether you can monetize your work or how much your efforts are worth - is YOU.</li>
                        <li className="white"><strong className="blue">Likes don’t define creators: </strong>We don't 'measure' artists, creators, and their work in terms of engagement metrics for our platform. You are simply what you create and what your fans love!</li>
                        <li className="white"><strong className="blue">Safe space for art and artists: </strong>Art is not black & white or right or wrong. it has shades of red, green, and blue. All opinions matter, all art forms are relevant. Choose your safe space - a world with no trolls, haters, or abusers.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="center white">Reach out to us and we’ll make sure to write back!</h1>
                <div className="icons">
                <a href="https://www.facebook.com/c/jamesqquick">
                <FontAwesomeIcon color="#3b5998" icon={faFacebook} size="3x" /></a>
                <a href="https://twitter.com/login" >
                <FontAwesomeIcon color="#00acee" icon={faTwitter} size="3x" /></a>
                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" className="youtube social">
                <FontAwesomeIcon color="#0e76a8" icon={faLinkedin} size="3x" /></a>
                <a  href="https://www.instagram.com/accounts/login/?next=%2Fc%2Fjamesqquick&source=desktop_nav" className="youtube social">
                <FontAwesomeIcon color="#cd486b" icon={faInstagram} size="3x" /></a>
                </div>
            </div>
        </div>
        
        )
};

export default Homepage;