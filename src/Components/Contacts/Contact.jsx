import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

  const Contact=()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e19524b6-fcfb-48d1-9258-2dca7f803b5c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
          console.log("Success", res);
        }
      };
    
return(
        <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>

        <img src={theme_pattern} alt=""/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>let's talk</h1>
            <p>I'm currently available to take on new projects,so feel free to contact </p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src={mail_icon} alt=""/>
                <p>bingemath08@gmail.com</p>
                </div>
               
                    <div className="contact-detail">
                    <img src={call_icon} alt=""/>
                    <p>+91 8949747407</p>
                    <p></p>
                    </div>

                   < div className="contact-detail">
                    <img src={location_icon} alt=""/>
                    <p>EWS hostel,SVNIT,Icchanath,Athwa,SURAT,Gujarat-395007</p>

                    </div>
            </div>
        </div>
        <form action="" onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor=''>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'></input>   
            <label htmlFor=''  >Write your message here</label> 
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
            </form>
      </div>
        </div>
    )
}
export default Contact