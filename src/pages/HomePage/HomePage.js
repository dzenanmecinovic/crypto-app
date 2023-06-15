import React from "react";
import video from "../../assets/video.mp4";
import "./HomePage.css";
import image1 from "../../assets/homepage.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import image2 from "../../assets/android.png";
import image3 from "../../assets/apple.png";
import image4 from "../../assets/homepage-buy-sell.png";
import image5 from "../../assets/homepage-crypto-removebg-preview.png";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import image6 from "../../assets/money-freely.png";

const HomePage = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    "&:hover": {
      backgroundColor: pink[700],
    },
  }));
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
                <img
                  src={image2}
                  style={{ marginLeft: "10px" }}
                  alt="android"
                ></img>
              </ToggleButton>
              <ToggleButton value="ios">
                <img src={image3} alt="apple"></img>
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
        <div className="buy-sell-trade">
          <img
            src={image4}
            alt="buy-sell-trade"
            style={{ width: "650px", height: "550px" }}
          ></img>
          <div className="naslov-text">
            <h1>Buy, sell and trade</h1>
            <p>
              Bulid and manage your crypto portfoliofrom your mobile device. Buy
              with your credit card, payment app, or bank account. Instantly
              swap between cryptocurrencies. Protect your returns by trading
              into USD stablecoins. Go for{" "}
              <a href="/prices" style={{ color: "blue" }}>
                coins
              </a>
              .
            </p>
          </div>
        </div>
        <div className="crypto">
          <div className="cryptoApp-text">
            <h1 style={{ fontSize: "2.7rem" }}>
              A trusted gateway to the world of CryptoApp
            </h1>
            <p style={{ fontSize: "1.3rem", lineHeight: "40px" }}>
              Buy, sell, send, recive and trade the most widely used ERC-20
              tokens. Conntect instantly to CryptoApps. Earn interest, trade
              using decentralized exchanges, participate in NFT marketplaces and
              more.
            </p>
            <Stack spacing={2} direction="row">
              <a href="/prices">
                <ColorButton
                  variant="contained"
                  sx={{
                    padding: "20px",
                    width: "200px",
                    borderRadius: "60px",
                    marginLeft: "130px",
                    marginTop: "30px",
                  }}
                >
                  My Coins
                </ColorButton>
              </a>
            </Stack>
          </div>
          <img src={image5} alt="phone"></img>
        </div>
        <div className="money">
          <img
            src={image6}
            alt="money"
            style={{ width: "550px", height: "600px" }}
          ></img>
          <div
            className="money-freely"
            style={{ position: "relative", bottom: 500 }}
          >
            <h1 style={{ fontSize: "2.7rem" }}>Move money freely</h1>
            <p style={{ fontSize: "1.3rem", lineHeight: "40px" }}>
              Send and recive cryptocurrencies anytime, anywhere - no questions
              asked. Take adventage of fully-customizable fees for sending.
              Create unlimited wallets to support your privacy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
