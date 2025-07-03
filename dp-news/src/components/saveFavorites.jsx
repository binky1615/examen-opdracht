// bullshit aint working
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GamesDetailPage from './GamesDetailPage';

// function App() {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const stored = localStorage.getItem('favorites');
//     if (stored) {
//       setFavorites(JSON.parse(stored));
//     }
//   }, []);

//   const saveFavorites = (newFavs) => {
//     localStorage.setItem('favorites', JSON.stringify(newFavs));
//   };

//   const toggleFavorite = (game) => {
//     const isFav = favorites.some(f => f.id === game.id);
//     const updated = isFav
//       ? favorites.filter(f => f.id !== game.id)
//       : [...favorites, game];

//     setFavorites(updated);
//     saveFavorites(updated);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/games/:id"
//           element={
//             <GamesDetailPage
//               favorites={favorites}
//               toggleFavorite={toggleFavorite}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
