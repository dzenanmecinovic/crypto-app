import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "../../components/Navbar/Price/Price";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CardCoinsPage() {
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins/${uuid}",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "15",
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
    setTimeout(() => {
      fetchData();
    }, 500);
  }, [data]);

  // return (
  //   <div id="main">
  //     <p>{data.name}</p>
  //   </div>
  // );
}
