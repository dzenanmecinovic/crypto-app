import React from "react";
import "./SingleCoin.css";
import { Link } from "react-router-dom";

export default function SingleCoin({ uuid, iconUrl, name, price, rank }) {
  return (
    <div className="singleCoin">
      <div className="each">
        <img src={iconUrl} alt="coinPhoto" id="ikonica"></img>
        <p style={{ fontSize: "2.5rem" }}>{name}</p>
      </div>
      <div className="eachTwo">
        <span>
          {name} coin current price is {price}
        </span>
      </div>
      <div className="eachThree">
        <br />
        <span>{rank} Rank</span>
      </div>
      <br />
      <Link id="backButton" to={"/prices"}>
        Back
      </Link>
    </div>
  );
}
