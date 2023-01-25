import React, { useState } from "react";
import { BsFillDoorClosedFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import { BsToggles } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const hideNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" />
              Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={hideNavbar} className="closeNavbar">
            <BsFillDoorClosedFill className="icon" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <BsToggles className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
