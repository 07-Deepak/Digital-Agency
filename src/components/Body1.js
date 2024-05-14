import React from 'react';

function Body1() {
  return (
    <div className="body1-container">
      <div className="content">
      <h3 className="title-with-line">Digital Agency Based on USA</h3>
        <h1>Meet the Corporate <br/>Team For Business</h1>
        <p>Globally develop unique technologies low-risk high-yield product <br/>
          Seamlessly cultivate extensible solution rather
        </p>
        <div className="button-image-container">
          <button className="animated-button">Click Me</button>
          <img src="./Images/footer/Digital-Agency.png" alt="Clickable Image" className="clickable-image" />
          <div className="contact-info">
            <p>Call us every day</p>
            <p className="phone-number">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="background-container">
      
        <img src="./Images/footer/round.png" alt="" className="background-image" />
        
        <img src="./Images/footer/play2.png" alt="" class="foreground-image" />
        
        </div>
    </div>
  );
}

export default Body1;
