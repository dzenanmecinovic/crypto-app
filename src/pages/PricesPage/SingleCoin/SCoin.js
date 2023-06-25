import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleCoin from "./SingleCoin";
import { AppContext } from "../../../context/AppContext";

export default function SCoin() {
  const { data } = useContext(AppContext);
  const { uuid } = useParams();
  const scoin = data.find((e) => {
    return e.uuid === uuid;
  });
  return (
    <div>
      <SingleCoin
        uuid={scoin.uuid}
        iconUrl={scoin.iconUrl}
        name={scoin.name}
        price={scoin.price}
        rank={scoin.rank}
      />
    </div>
  );
}
