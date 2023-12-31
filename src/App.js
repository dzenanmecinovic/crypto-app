import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PricesPage from "./pages/PricesPage/PricesPage";
import Footer from "./components/Footer/Footer";
import LogIn from "./pages/LogIn/LogIn";
import Layout from "./components/Layout/Layout";
import SCoin from "./pages/PricesPage/SingleCoin/SCoin";
import TeamPage from "./pages/TeamPage/TeamPage";
import CoinsPage from "./pages/CoinsPage/CoinsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<Layout />}>
          <Route path="/prices" element={<PricesPage />}></Route>
        </Route>
        <Route path="/prices/:uuid" element={<SCoin />}></Route>
        <Route path="/mycoins" element={<CoinsPage />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/team" element={<TeamPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
