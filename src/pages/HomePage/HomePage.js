import React from "react";
import video from "../../assets/video.mp4";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="homePage">
        <div>
          <h1 id="naslov">
            The World's Largest Crypto Currency <br></br>Platform
          </h1>
        </div>
        <div className="homepageContent">
          <a href="/prices">
            <button id="getStarted">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
