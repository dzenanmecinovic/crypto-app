import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import PricesPage from "./pages/PricesPage/PricesPage";
import Price from "./components/Navbar/Price/Price";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/prices" element={<PricesPage />}></Route>
        <Route path="/coins" element={<Price />}></Route>
      </Routes>
    </div>
  );
}

export default App;
