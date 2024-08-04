import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
 
import underline from '../../assets/nav_underline.svg'
import { useState,useRef } from 'react';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
    
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <img src={menu_close} alt="" className="nav-mob-close"/>
        <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt=""/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></> }</li>
        
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
