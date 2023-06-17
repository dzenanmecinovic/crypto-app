import React, { useContext, useEffect, useState } from "react";
import Price from "../../components/Navbar/Price/Price";
import "./PricesPage.css";
import axios from "axios";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Container,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
// import { FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { AppContext } from "../../context/AppContext";
import SearchIcon from "@mui/icons-material/Search";

export default function PricesPage() {
  const [data, setData] = useState(null);
  const { searchTerm, handleChange } = useContext(AppContext);

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
        limit: "20",
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
  console.log(data);
  const navigate = useNavigate();

  return (
    <div id="main">
      <div className="pricesPage">
        {data === null ? (
          <p id="loading">Loading...</p>
        ) : (
          <>
            <Container
              maxWidth="md"
              sx={{
                position: "absolute",
                top: 120,
                left: "40%",
                color: "white",
              }}
            >
              <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 250, backgroundColor: "white", borderRadius: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Container>
            <TableContainer component={Paper} sx={{ width: "700px" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">#</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Market Cap</TableCell>
                    <TableCell align="right">7 days</TableCell>
                    <TableCell align="right">Fav</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((coin) => (
                    <TableRow
                      key={coin.UUID}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={() => navigate(`/coinscard/${coin.uuid}`)}
                    >
                      <TableCell align="right">{coin.rank}</TableCell>
                      <TableCell component="th" scope="row">
                        <img src={coin.iconUrl} style={{ width: 25 }}></img>
                      </TableCell>
                      <TableCell align="right">{coin.name}</TableCell>
                      <TableCell align="right">
                        $${Number(coin.price).toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        ${Number(coin.marketCap).toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        <Sparklines
                          data={coin.sparkline.map((el) => el)}
                          height={100}
                        >
                          <SparklinesLine
                            style={{
                              stroke: "#559500",
                              fill: "orange",
                              fillOpacity: "1",
                              stroke: "black",
                              strokeWidth: 3,
                            }}
                          />
                        </Sparklines>
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
          </>
        )}
      </div>
    </div>
  );
}
