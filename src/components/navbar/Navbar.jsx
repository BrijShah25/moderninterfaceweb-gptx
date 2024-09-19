import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gptx__navbar">
      <div className="gptx__navbar-links">
        <div>
          <h1>GPTX</h1>
        </div>
        <div className="gptx__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgptx">What is GPTX?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
        </div>
      </div>
      <div className="gptx__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gptx__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gptx__navbar-menu_container scale-up-center">
          <div className="gptx__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgptx">What is gptx?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
          </div>
          <div className="gptx__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
