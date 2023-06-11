import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Price() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "377b5ced87msh79d0645fafaa557p1c740fjsna2d6398a9888",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(() => {
    fetchData();
  }, 1000);

  return (
    <div>{data ? <h1>CryptoAPI prikupljen</h1> : <h1>Učitavanje...</h1>}</div>
  );
}
