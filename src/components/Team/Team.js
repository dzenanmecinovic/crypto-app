import React from "react";
import "./Team.css";
import team from "../../team.json";

export default function Team() {
  return (
    <div className="teamDiv">
      {team.map((person) => {
        <h1>{person.name}</h1>;
      })}
    </div>
  );
}
