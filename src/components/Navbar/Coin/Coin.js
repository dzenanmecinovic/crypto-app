import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { TableCell, TableRow } from "@mui/material";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function Coin() {
  const { favCoins, setFavCoins } = useContext(AppContext);
  // const [query, setQuery] = useState("");
  const addFavoriteCoin = (coin) => {
    if (favCoins.includes(coin)) {
      const filteredArray = favCoins.filter((el) => el.uuid !== coin.uuid);
      setFavCoins(filteredArray);
    } else {
      setFavCoins([...favCoins, coin]);
    }
  };
  return (
    <>
      <div className="mapaFavorites">
        {favCoins.map((coin) => (
          <TableRow
            key={coin.uuid}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="right">{coin.rank}</TableCell>
            <TableCell component="th" scope="row">
              <img src={coin.iconUrl} style={{ width: 25 }}></img>
            </TableCell>
            <TableCell align="right">{coin.name}</TableCell>
            <TableCell align="right">
              ${Number(coin.price).toLocaleString()}
            </TableCell>
            <TableCell align="right">
              ${Number(coin.marketCap).toLocaleString()}
            </TableCell>
            <TableCell align="right">
              <Sparklines data={coin.sparkline.map((el) => el)} height={100}>
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
              <div className="dugme">
                <button
                  style={{
                    border: "1px solid #252525",
                    borderRadius: "50px",
                    padding: ".3rem",
                    backgroundColor: "white",
                    color: "white",
                    cursor: "pointer",
                    width: "3rem",
                  }}
                  onClick={() => addFavoriteCoin(coin)}
                >
                  {favCoins.includes(coin) && "💔"}
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </div>
    </>
  );
}

{
  /* <Container
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              <TableCell align="right" style={{ width: 100 }}>
                Name
              </TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">7 days</TableCell>
              <TableCell align="right">Fav</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            <div className="mapaFavorites">
            favCoins.map((coin) => (
                <TableRow
                  key={coin.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  // onClick={() => goToTop(navigate(`/prices/${coin.uuid}`))}
                >
                  <TableCell align="right">{coin.rank}</TableCell>
                  <TableCell component="th" scope="row">
                    <img src={coin.iconUrl} style={{ width: 25 }}></img>
                  </TableCell>
                  <TableCell align="right">{coin.name}</TableCell>
                  <TableCell align="right">
                    ${Number(coin.price).toLocaleString()}
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
                  <div className="dugme">
                <button
                  style={{
                    border: "1px solid #252525",
                    borderRadius: "50px",
                    padding: ".3rem",
                    backgroundColor: "white",
                    color: "white",
                    cursor: "pointer",
                    width: "3rem",
                  }}
                  onClick={() => addFavoriteCoin(coin)}
                >
                  {favCoins.includes(coin) && "💔"}
                </button>
              </div>
                  </TableCell>
                </TableRow>
              ))
              </div>
          </TableBody>
        </Table>
      </TableContainer> */
}
