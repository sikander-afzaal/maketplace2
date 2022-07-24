import "./App.css";
import Home from "./Pages/HomePage/Home";
import Profile from "./components2/Profile";
import SellNFT from "./components2/SellNFT";
import NFTPage from "./components2/NFTpage";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import NftDetail from "./Pages/NftDetail/NftDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NftDetail />} path="/NftDetail/:id" />
        {/* <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellNFT" element={<SellNFT />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
