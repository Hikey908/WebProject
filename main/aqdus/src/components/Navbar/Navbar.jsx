// import React from 'react'
// import './navbar.css'

// const navbar = () => {
//   return (
//     <div className="navbar">

//     <ul>
//     <li><a href = '#'>Home</a></li>
//     <li><a href = '../Forum'>Forum</a></li>
//     <li><a href ='../Meetings'>Meetings</a></li>
//     <li>Help</li> 
//     </ul>

//     </div>
//   )
// }

// export default navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import studylogo from "../../assests/images/logo3.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={studylogo}  alt="Study Sphere Logo" style={styles.logoImage} />
        <h3 style={styles.logo}>Study Sphere</h3>
      </div>
      <ul style={isMobile ? styles.navLinksMobile : styles.navLinks} onClick={() => setIsMobile(false)}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="../Forumm" style={styles.navLink}>Forum</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="../Meetings1" style={styles.navLink}>Meeting</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/help" style={styles.navLink}>Help</Link>
        </li>
      </ul>
      <button style={styles.mobileMenuIcon} onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* Cross or Hamburger icon */}
      </button>
    </nav>
  );
};

// Styles for the Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#17bf9e',
    padding: '20px 20px',
    margin: '10px'
  },
  logo: {
    color: 'white',
    fontSize: '26px',
    fontWeight: 'bold',
    margin:0,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px', // Adjust size as needed
    height: '40px',
    marginRight: '10px', // Space between logo and text
   
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLinksMobile: {
    display: 'block',
    position: 'absolute',
    top: '60px',
    right: '0',
    backgroundColor: '#17bf9e',
    width: '100%',
    textAlign: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '25px',
    fontWeight: '500',
    margin:20,

  },
  mobileMenuIcon: {
    display: 'none',
    fontSize: '30px',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  '@media (max-width: 768px)': {
    navLinks: {
      display: 'none',
    },
    mobileMenuIcon: {
      display: 'block',
    },
  },
};

export default Navbar;

