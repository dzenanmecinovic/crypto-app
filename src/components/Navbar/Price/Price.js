import React from "react";
import "./Price.css";

export default function Price({ UUID, iconUrl, name, price }) {
  return (
    <div className="prices">
      <div className="contentCoin">
        <img src={iconUrl} alt="coinPhoto" id="icon"></img>
        <span>{name}</span>
        <div className="cene">
          <span className="price">{price.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
}
