import React, { useState, useEffect } from "react";
import Price from "../../components/Navbar/Price/Price";
import "./PricesPage.css";
import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
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
      console.log(response.data.data.coins);
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
        <p>Loading...</p>
      ) : (
        <p>
          {data.map((coin) => {
            return (
              <Price
                key={coin.UUID}
                iconUrl={coin.iconUrl}
                name={coin.name}
                price={coin.price}
              />
            );
          })}
        </p>

        // <TableContainer component={Paper}>
        //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //     <TableHead>
        //       <TableRow>
        //         <TableCell>Dessert (100g serving)</TableCell>
        //         <TableCell align="right">Calories</TableCell>
        //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
        //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {data.map((coin) => (
        //         <TableRow
        //           key={coin.UUID}
        //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        //         >
        //           <TableCell component="th" scope="row">
        //             {coin.iconUrl}
        //           </TableCell>
        //           <TableCell align="right">{coin.name}</TableCell>
        //           <TableCell align="right">{coin.price}</TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        // </TableContainer>
      )}
    </div>
  );
}
