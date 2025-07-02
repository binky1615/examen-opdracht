import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Games from "./pages/Games";
import Reviews from "./pages/Reviews";
import HomePage from "./pages/Homepage";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./pages/profile";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 text-gray-500 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/News" element={<News />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
