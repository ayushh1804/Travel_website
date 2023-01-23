import React from "react";
import "./footer.css";
import video from "../../assets/Blue.mp4";
import { RiMailSendLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep in Touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND
              <RiMailSendLine className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                Travel
              </a>
            </div>
            <div className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              doloremque animi praesentium sapiente? Voluptatem molestias eum
              magni eligendi rem adipisci?
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one  */}
            <div className="linkGroup">
              <span className="groupTitle">Our Agency</span>
              <li className="footerList flex">Services</li>
              <li className="footerList flex">Insurance</li>
              <li className="footerList flex">Tourism</li>
              <li className="footerList flex">Payment</li>
            </div>
          </div>
          <div className="footerSocials">
            <RiMailSendLine className="icon" />
            <RiMailSendLine className="icon" />
            <RiMailSendLine className="icon" />
            <RiMailSendLine className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
