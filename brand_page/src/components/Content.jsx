import React from "react";

const Content = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button type="button">Shop Now</button>
          <button className="secondary-btn" type="button">category</button>
        </div>

        <div className="shopping">
          <p>Also Available</p>
          <div className="brand-icons">
            <img src="./flipkart.png" alt="Flipkart_Logo" />
            <img src="./amazon.png" alt="amazon_logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./shoe_image.png" alt="amazon_logo" />
      </div>
    </main>
  );
};

export default Content;
