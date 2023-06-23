import React from "react";
import "./Team.css";

export default function Team({ imageURL, name, location, description }) {
  return (
    <div className="teamDiv">
      <div className="teamCard">
        <img src={imageURL} alt="userPfp"></img>
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
