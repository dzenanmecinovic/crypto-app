import React from "react";
import "./Footer.css";
import image from "../../assets/footer.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-image">
          <img src={image}></img>
        </div>
        <div className="main">
          <h2 style={{ margin: "40px" }}>&copy;Copyright2023</h2>
          <div className="donate-row" style={{ marginBottom: "40px" }}>
            <span
              className="footer-title"
              style={{
                color: "white",
                marginLeft: "60px",
              }}
            >
              Support CryptoApp.org:
            </span>
            <a
              href="/login"
              onclick="openDonationModal()"
              class="donate-btn btn-bright"
              style={{
                padding: "12px",
                background: "orange",
                color: "white",
                marginLeft: "15px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Donate
            </a>
          </div>
        </div>
        <div className="linkovi">
          <div className="introduction">
            <p className="footer-title" style={{ marginLeft: "38px" }}>
              Introduction:
            </p>
            <ul className="footermenu-list" style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Individuals</a>
              </li>
              <li>
                <a href="#">Businesses</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Getting started</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">You need to now</a>
              </li>
              <li>
                <a herf="#">White paper</a>
              </li>
            </ul>
          </div>
          <div className="resource">
            <p className="footer-title" style={{ marginLeft: "38px" }}>
              Resources:
            </p>
            <ul className="footermenu-list" style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Exchanges</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Vocabulary</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Bitcoin Core</a>
              </li>
            </ul>
          </div>
          <div className="participate">
            <p className="footer-title" style={{ marginLeft: "38px" }}>
              Participate:
            </p>
            <ul className="footermenu-list" style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Support Bitcoin</a>
              </li>
              <li>
                <a href="#">Buy Bitcoin</a>
              </li>
              <li>
                <a href="#">Running a full node</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
            </ul>
          </div>
          <div className="other">
            <p className="footer-title" style={{ marginLeft: "38px" }}>
              Other:
            </p>
            <ul className="footermenu-list" style={{ listStyleType: "none" }}>
              <li>
                <a href="#">Avoid Scams</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">About bitcoin.org</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
