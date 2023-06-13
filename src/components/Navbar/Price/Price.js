import React, { useContext } from "react";
import "./Price.css";
import { AppContext } from "../../../context/AppContext";

export default function Price({ UUID, iconUrl, name, price }) {
  const { setFav, favCoins } = useContext(AppContext);
  const toggleFavorite = (UUID) => {
    if (this.UUID === UUID) {
      setFav(true);
      favCoins.push(this);
    } else {
      setFav(false);
    }
  };
  return (
    <div className="prices">
      <div className="contentCoin">
        <img src={iconUrl} alt="coinPhoto" id="icon"></img>
        <span>{name}</span>
        <div className="cene">
          <span className="price">{price.slice(0, 10)}</span>
          <button id="favorite" onClick={() => toggleFavorite(UUID)}>
            💗
          </button>
        </div>
      </div>
    </div>
  );
}
