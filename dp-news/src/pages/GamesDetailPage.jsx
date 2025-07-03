import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GamesDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//favorites doesnt work
// const isFavorite = favorites.some(fav => String(fav.id) === String(id));

// const handleFavorite = () => {
//   if (!game) return;

//   const alreadyFav = favorites.some(f => String(f.id) === String(id));
//   toggleFavorite(game);

//   alert(`Je hebt game ${game.name} ${alreadyFav ? 'uit favorieten verwijderd' : 'als favoriet toegevoegd'}!`);
// };


  useEffect(() => {
    async function fetchGame() {
      try {
        const res = await fetch(`https://thingproxy.freeboard.io/fetch/http://store.steampowered.com/api/appdetails?appids=${id}`);
        if (!res.ok) throw new Error("Game not found");
        const data = await res.json();
        setGame(data[id].data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!game) return <p>Game not found</p>;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.header_image} alt={game.name} />
 {/* save button doesnt work */}
    {/* <button 
    className="favorite-button" 
    onClick={handleFavorite}
    >
     {favorites.some(fav => String(fav.id) === String(id)) ? '★' : '☆'}
    </button> */}

      <p>{game.short_description}</p>
      {game.website && <a href={game.website}>Link</a>}
    </div>
  );
}

export default GamesDetailPage;
