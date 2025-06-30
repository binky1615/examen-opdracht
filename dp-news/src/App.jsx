import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Games from "./pages/Games";
import Reviews from "./pages/Reviews";
import HomePage from "./pages/Homepage";
import News from "./pages/News";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="News" element={<News />} />
          <Route path="Games" element={<Games />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
