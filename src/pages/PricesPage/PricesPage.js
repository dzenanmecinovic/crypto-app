import React, { useState } from "react";
import Price from "../../components/Navbar/Price/Price";
import "./PricesPage.css";
import axios from "axios";

export default function PricesPage() {
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
        limit: "10",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "377b5ced87msh79d0645fafaa557p1c740fjsna2d6398a9888",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  setTimeout(() => {
    fetchData();
  }, 1000);

  return (
    <div className="pricesPage">
      {data === null ? (
        <p id="loading">Loading...</p>
      ) : (
        <p>
          {data.map((coin) => {
            return (
              <Price
                key={coin.UUID}
                iconUrl={coin.iconUrl}
                name={coin.name}
                price={coin.price}
                toggleFavorite={coin.toggleFavorite}
              />
            );
          })}
        </p>
      )}
    </div>
  );
}
