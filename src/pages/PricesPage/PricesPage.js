import React, { useContext, useEffect } from "react";
import "./PricesPage.css";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import Search from "../../components/Search/Search";
import { AppContext } from "../../context/AppContext";

export default function PricesPage() {
  const { data, setData } = useContext(AppContext);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyuuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        // limit: "20",
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

  useEffect(() => {
    setInterval(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="pricesMain">
      <div className="pricesPage">
        {data === null ? (
          <SyncLoader color="black" />
        ) : (
          <>
            <Search />
          </>
        )}
      </div>
    </div>
  );
}
