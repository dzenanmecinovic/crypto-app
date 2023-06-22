import React, { useContext } from "react";
import "./CoinsPage.css";
import Coin from "../../components/Navbar/Coin/Coin";
import { AppContext } from "../../context/AppContext";

export default function CoinsPage() {
  const { data, setData } = useContext(AppContext);
  return (
    <div className="coinsPage">
      <Coin />
    </div>
  );
}
