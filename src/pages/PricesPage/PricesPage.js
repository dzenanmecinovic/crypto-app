import React, { useContext, useEffect, useState } from "react";
import Price from "../../components/Navbar/Price/Price";
import "./PricesPage.css";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

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

  return (
    <div id="main">
      <div className="pricesPage">
        {data === null ? (
          <p id="loading">Loading...</p>
        ) : (
          // // <div className="prikazCoinovaFlex">
          // //   <div className="prikazCoinova">
          // //     {data.slice(0, 9).map((coin) => {
          // //       return (
          // //         <Price
          // //           key={coin.UUID}
          // //           iconUrl={coin.iconUrl}
          // //           name={coin.name}
          // //           price={coin.price}
          // //           toggleFavorite={coin.toggleFavorite}
          // //         />
          // //       );
          // //     })}
          // //   </div>
          // //   <div className="prikazCoinovadrugi">
          // //     {data.slice(9, 18).map((coin) => {
          // //       return (
          // //         <Price
          // //           key={coin.UUID}
          // //           iconUrl={coin.iconUrl}
          // //           name={coin.name}
          // //           price={coin.price}
          // //           toggleFavorite={coin.toggleFavorite}
          // //         />
          // //       );
          // //     })}
          // //   </div>
          // </div>
          <TableContainer component={Paper} sx={{ width: "700px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">#</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Fav</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((coin) => (
                  <TableRow
                    key={coin.UUID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{coin.rank}</TableCell>
                    <TableCell component="th" scope="row">
                      <img src={coin.iconUrl} style={{ width: 25 }}></img>
                    </TableCell>
                    <TableCell align="right">{coin.name}</TableCell>
                    <TableCell align="right">
                      ${coin.price.slice(0, 8)}
                    </TableCell>
                    <TableCell align="right">
                      <button
                        style={{ border: "none", backgroundColor: "white" }}
                      >
                        <FavoriteBorderIcon
                          style={{ color: "red" }}
                        ></FavoriteBorderIcon>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}
