import React from 'react';
import { useState } from 'react'
import styles from './Navbar.module.css';
import brand from '../image/rightlogo.svg'
import search from '../image/search.svg'
import love from '../image/love.svg'
import user from '../image/user.svg'
import bag from '../image/bag.svg'
import downlogo from '../image/downlogo.svg'
import { Link } from "react-router-dom";
// import React from 'react';
function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <div className={styles.logobox}>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
            <div className={styles.brand}>
            <img src={brand}></img>
            </div>
            <Link to='Appscrip-task-swarup/' className={`${styles.logo}`}>LOGO</Link>
            <div className={styles.toplogobox}>
              <img src={search} alt="serach logo" />
              <img src={love} alt="love logo" />
              <img src={bag} alt="bag logo" />
              <img src={user} alt="user logo" />
              <div className={styles.eng}><p className={styles.engp}>ENG</p><img src={downlogo} alt="downlogo" /></div>
            </div>
          </div>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#' className={`${styles.navLink}`}>SHOP</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>SKILLS</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>STORIES</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>ABOUT</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
;