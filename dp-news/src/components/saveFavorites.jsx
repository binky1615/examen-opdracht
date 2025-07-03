// stuff wont save/code doesnt work
// import React, { useState, useEffect } from 'react';
// import GamesDetailPage from './GamesDetailPage';

// function App() {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const savedFavorites = localStorage.getItem('favorites');
//     if (savedFavorites) {
//       setFavorites(JSON.parse(savedFavorites));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (game) => {
//     setFavorites(prev => {
//       const exists = prev.find(g => g.id === game.id);
//       if (exists) {
//         return prev.filter(g => g.id !== game.id); // remove
//       } else {
//         return [...prev, game]; // add
//       }
//     });
//   };

//   return (
//     <GamesDetailPage favorites={favorites} toggleFavorite={toggleFavorite} />
//   );
// }

// export default App;
