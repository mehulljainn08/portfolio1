import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About=()=>{
    return (
        <div  id='about' className='about'>
<div className="about-title">
    <h1>About me</h1>
  <img src={theme_pattern} alt=""/>
</div>
<div className="about-sections">
    <div className="about-left">
        <img src={profile_img}></img>
    </div>
    <div className="about-right">
        <div className="about-para">
            <p>I am a passionate Developer with expertise in both frontend and backend techs</p>
            <p>I am a skilled problem solver,You give me a problem,I may not have it's solution,but I would find it out</p>
        </div>
        <div className="about-skill"><p>React</p><hr style={{width:"50%"}}></hr></div>
        <div className="about-skill"><p>Mongo DB</p><hr style={{width:"60%"}}></hr></div>
        <div className="about-skill"><p>Node Js</p><hr style={{width:"70%"}}></hr></div>
    </div>
</div>
        </div>
    )
}
export default About;