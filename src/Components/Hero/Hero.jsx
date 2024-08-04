import React from 'react';
import './Hero.css' 
import profile_img from '../../assets/myimg1.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero=()=>{
    return(
        <div id='home' className='hero' >
        <img src={profile_img} alt="" ></img>
        <h1><span>I'm Mehul,</span>A Full Stack Developer</h1>
        <p>I am developer from SVNIT,Surat,with particular interest in MERN stack</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
        </div>
    )
}
export default Hero