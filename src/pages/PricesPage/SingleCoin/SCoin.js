import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleCoin from "./SingleCoin";
import "./SCoin.css";
import { AppContext } from "../../../context/AppContext";

export default function SCoin() {
  const { data } = useContext(AppContext);
  const { uuid } = useParams();
  const coin = data.find((e) => {
    return (e.uuid = uuid);
  });
  return (
    <div className="singleCoin">
      <SingleCoin
        uuid={coin.uuid}
        iconUrl={coin.iconUrl}
        name={coin.name}
        price={coin.price}
      />
    </div>
  );
}
