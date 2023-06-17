import React, { useContext } from "react";
import "./CoinsPage.css";
import Coin from "../../components/Navbar/Coin/Coin";
import { AppContext } from "../../context/AppContext";

export default function CoinsPage() {
  return (
    <div className="coinsPage">
      <Coin />
    </div>
  );
}
