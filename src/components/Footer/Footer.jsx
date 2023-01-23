import React from 'react'
import "./footer.css";
import video from "../../assets/Blue.mp4";
import {RiMailSendLine} from "react-icons/ri";
const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contractDiv flex">
          <div className="text">
            <small>Keep in Touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>SEND<RiMailSendLine className="icon"/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer