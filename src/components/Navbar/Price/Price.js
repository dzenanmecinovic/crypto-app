import React, { useState } from "react";
import "./Price.css";

export default function Price({ data, UUID, iconUrl, name, price }) {
  const [favorite, setFavorite] = useState(false);
  const [favCoins, setFavCoins] = useState([]);
  const toggleFavorite = (UUID) => {
    if (data.filter((coin) => coin.UUID === UUID)) {
      setFavorite(true);
    } else {
      setFavorite(false);
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
