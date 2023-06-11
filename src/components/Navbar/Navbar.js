import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

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
        <NavLink to={"/"}>
          <img src={logo} alt="logo" id="logoStyle"></img>
        </NavLink>
        <NavLink
          to={"/prices"}
          style={({ isActive }) => (isActive ? activeStyles : nonActiveStyles)}
        >
          <h2 style={{ fontFamily: "Arial" }}>Prices</h2>
        </NavLink>
        <NavLink
          to={"/coins"}
          style={({ isActive }) => (isActive ? activeStyles : nonActiveStyles)}
        >
          <h2 style={{ fontFamily: "Arial" }}>My Coins</h2>
        </NavLink>
      </header>
    </>
  );
}