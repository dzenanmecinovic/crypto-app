import React from "react";
import Team from "../../components/Team/Team";
import teamJson from "./../../team.json";
import "./TeamPage.css";

export default function TeamPage() {
  return (
    <>
      <div className="teamPage">
        <div className="teamPagePosition">
          {teamJson.map((user) => {
            return (
              <Team
                id={user.id}
                imageURL={user.imageURL}
                name={user.name}
                location={user.location}
                description={user.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
