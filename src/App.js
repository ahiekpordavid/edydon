import React from "react";
import Navbar from "./constants/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallary from "./pages/Gallary";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
