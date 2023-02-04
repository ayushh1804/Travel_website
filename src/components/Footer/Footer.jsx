import React from "react";
import "./footer.css";
import video from "../../assets/footervideo.mp4";
import { RiMailSendLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep in Touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              <a href="mailto:abc@gmail.com">SEND</a> 
              <RiMailSendLine className="icon " />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                Travel
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              doloremque animi praesentium sapiente? Voluptatem molestias eum
              magni eligendi rem adipisci?fgfgfghghg
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <RiMailSendLine className="icon" />
              <RiMailSendLine className="icon" />
              <RiMailSendLine className="icon" />
              <RiMailSendLine className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one  */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle"> Our Agency</span>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Payment
              </li>
            </div>
            {/* group2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle"> Partners</span>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Payment
              </li>
            </div>
            {/* group 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle"> Last Minute</span>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <IoIosArrowDroprightCircle className="icon" />
                Payment
              </li>
            </div>
          </div>

          {/* <div className="footerDiv flex">
            <small>copyright &copy; </small>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
