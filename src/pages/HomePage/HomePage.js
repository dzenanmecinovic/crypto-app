import React from "react";
import video from "../../assets/video.mp4";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="homePage">
        <div>
          <h1 id="naslov">The World's Largest Crypto Platform</h1>
        </div>
        <div className="homepageContent">
          <a href="/prices">
            <button
              id="getStarted"
              onClick={window.scrollTo({
                top: 100,
                left: 0,
                behavior: "smooth",
              })}
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
      <h1>rad</h1>
    </>
  );
};

export default HomePage;
