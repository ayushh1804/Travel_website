import React from "react";
import video from "../../assets/Blue.mp4";
import "./home.css";
import { SlLocationPin } from "react-icons/sl";
import { HiFilter } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here...." />
              <SlLocationPin className="icon" color="black" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Enter the date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price </label>
              <h3 className="total">$500</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="500" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <BsInstagram className="icon" />
            <BsInstagram className="icon" />
            <BsInstagram className="icon" />
          </div>
          <div className="leftIcons">
            <BsInstagram className="icon" />
            <BsInstagram className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
