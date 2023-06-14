import React from "react";
import video from "../../assets/video.mp4";
import "./HomePage.css";
import image1 from "../../assets/homepage.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import image2 from "../../assets/android.png";
import image3 from "../../assets/apple.png";

const HomePage = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
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
      <div className="intro">
        <div className="intro1">
          <h1 style={{ whiteSpace: "pre-line" }}>
            Free your<br></br> money and invest <br></br> with confidence
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginLeft: "90px",
              color: "rgb(45, 50, 59)",
              lineHeight: "40px",
            }}
          >
            Your gateway to Bitcoin and beyond. Buy, sell, trade, donate{" "}
            <br></br>and invest in one safe and simple app.
          </p>
          <div className="toggle-button">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="android">
                <img src={image2} style={{ marginLeft: "10px" }}></img>
              </ToggleButton>
              <ToggleButton value="ios">
                <img src={image3}></img>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className="intro2">
          <img
            src={image1}
            alt="homepage"
            style={{ width: "450px", height: "650px", objectFit: "contain" }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default HomePage;
