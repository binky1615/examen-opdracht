import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import News from "./pages/News";
import Games from "./pages/Games";
import GamesDetailPage from "./pages/GamesDetailPage";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./pages/profile";


function App() {
  // const STORAGE_KEY = 'favorites';
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   const stored = localStorage.getItem(STORAGE_KEY);
  //   if (stored) {
  //     setFavorites(JSON.parse(stored));
  //   }
  // }, []);

  // const toggleFavorite = (game) => {
  //   const isFav = favorites.some(f => f.id === game.id);
  //   const updated = isFav
  //     ? favorites.filter(f => f.id !== game.id)
  //     : [...favorites, game];

  //   setFavorites(updated);
  //   saveFavorites(updated);
  //   console.log('New favorites:', updated);
  //   console.log('Saved to localStorage:', JSON.stringify(updated));
  // };

  // const saveFavorites = (newFavs) => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavs));
  // };

  return (
    <BrowserRouter>
      <div className="bg-gray-900 text-gray-500 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/News" element={<News />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Games/:id" element={<GamesDetailPage />} />
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
