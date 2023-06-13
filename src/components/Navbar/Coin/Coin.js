import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Coin() {
  const { favCoins } = useContext(AppContext);
  const cena = favCoins.price;
  return (
    <div className="prices">
      <div className="contentCoin">
        <img src={favCoins.iconUrl} alt="coinPhoto" id="icon"></img>
        <span>{favCoins.name}</span>
        <div className="cene">
          <span className="price">{cena}</span>
          <button
            id="favorite"
            onClick={() => favCoins.toggleFavorite(favCoins.UUID)}
          >
            💗
          </button>
        </div>
      </div>
    </div>
  );
}
