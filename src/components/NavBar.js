
import React, { useState } from 'react';


  function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='nav'>

      <img src={"./Images/main-logo.png"} alt="Logo" className="logo" />
      <button class="menu-btn" id="move-to-right">&#9776;</button>
      <ul>
        <li>
          Home
          <ul>
            <li>Section 1</li>
            <li>Section 2</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>
          Company
          <ul>
            <li>About Us</li>
            <li>Team</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>
          Services
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>
          Pages
          <ul>
            <li>Page 1</li>
            <li>Page 2</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>
          Elements
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>
          Blog
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            {/* Add more sections as needed */}
          </ul>
        </li>
        <li>Contact</li>
        {/* Add more tabs as needed */}
      </ul>
    </div>
  );
 
  
}

export default NavBar;
