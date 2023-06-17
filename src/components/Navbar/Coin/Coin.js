import React from "react";

export default function Coin({ UUID, iconUrl, name, price }) {
  return (
    <div className="coins">
      <div className="contentCoin">
        <img src={iconUrl} alt="coinPhoto" id="icon"></img>
        <span>{name}</span>
        <div className="cene">
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
}
