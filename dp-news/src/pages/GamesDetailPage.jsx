import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GamesDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchGame() {
      try {
        const res = await fetch(`https://thingproxy.freeboard.io/fetch/http://store.steampowered.com/api/appdetails?appids=${id}`);
        if (!res.ok) throw new Error("Game not found");
        const data = await res.json();
        if (!data[id]?.data) throw new Error("Invalid game data");
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
      <p>{game.short_description}</p>
      {game.website && <a href={game.website}>Link</a>}
    </div>
  );
}

export default GamesDetailPage;
