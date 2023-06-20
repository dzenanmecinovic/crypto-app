import React from "react";

export default function SingleCoin({ uuid, iconUrl, name, price }) {
  return (
    <div>
      <img src={iconUrl} alt="coinPhoto" id="ikonica"></img>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
