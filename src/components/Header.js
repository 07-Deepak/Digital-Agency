import React from 'react';

function Header() {
  return (
<header className='header'>
  <div className="contact-info">
    <div>
      <img src="./Images/footer/email.png" alt="example@example.com" />
      <p><p>abc@example.com</p></p>
      <img src="./Images/footer/map.png" alt="2/20, Astern Road, USA" />
      <p>2/20, Astern Road, USA</p>
      <img src="./Images/footer/telephone.png" alt="+880 320 432" />
      <p>+880 320 432</p>
    </div>
  </div>
  <div className="social-logos">
    <img src="./Images/footer/facebook.png" alt="Facebook" />
    <img src="./Images/footer/twitter.png" alt="Twitter" />
    <img src="./Images/footer/instagram.png" alt="Instagram" />
  </div>
</header>
  );
}

export default Header;