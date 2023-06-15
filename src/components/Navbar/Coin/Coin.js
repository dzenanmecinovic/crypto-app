import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Coin() {
  const { favorites } = useContext(AppContext);
  return <div className="coins"></div>;
}
