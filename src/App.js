import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PricesPage from "./pages/PricesPage/PricesPage";
import Footer from "./components/Footer/Footer";
import CoinsPage from "./pages/CoinsPage/CoinsPage";

import CardCoinsPage from "./pages/CardCoinsPage/CardCoinsPage";
import LogIn from "./pages/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/prices" element={<PricesPage />}></Route>
        <Route path="/coins" element={<CoinsPage />}></Route>
        <Route path="/cardcoins/:uuid" element={<CardCoinsPage />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
