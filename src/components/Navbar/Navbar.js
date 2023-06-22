import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/btcoinlogo-removebg-preview.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeStyles = {
    color: "#fff",
    textDecoration: "none",
  };
  const nonActiveStyles = {
    textDecoration: "none",
    color: "white",
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header className={navbar ? "active" : "navbar"}>
        <NavLink to={"/"} onClick={goToTop}>
          <img src={logo} alt="logo" id="logoStyle"></img>
        </NavLink>
        <NavLink
          onClick={goToTop}
          to={"/prices"}
          style={({ isActive }) => (isActive ? activeStyles : nonActiveStyles)}
        >
          <h2 style={{ fontFamily: "Arial" }}>Prices</h2>
        </NavLink>
        <NavLink
          onClick={goToTop}
          to={"/login"}
          style={({ isActive }) => (isActive ? activeStyles : nonActiveStyles)}
        >
          <h2>Log in</h2>
        </NavLink>
      </header>
    </>
  );
}
