import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function GamesDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();

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

    useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = storedFavorites.some((g) => g.steam_appid === parseInt(id));
    setFavorite(isFav);
    }, [id]);


const handleFavorite = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorite) {
    // Remove this game from favorites
    const updatedFavorites = storedFavorites.filter((g) => g.steam_appid !== game.steam_appid);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorite(false);
  } else {
    // Add this game to favorites
    const newFavorite = {
      name: game.name,
      header_image: game.header_image,
      steam_appid: game.steam_appid,
    };
    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorite(true);
  }
};


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!game) return <p>Game not found</p>;


  return (
    <section className="min-h-screen flex flex-row gap-8 justify-center items-center text-center p-8 text-gray-400 ">
        <section>
            <div>
            <h1 className='text-3xl pb-4'>{game.name} 
                <button onClick={handleFavorite}>
                    {favorite ? "❤️" : "🤍"}
                </button>
            </h1>
            <div className="flex flex-row justify-center items-center gap-6 mb-4 ">
                <img src={game.header_image} alt={game.name} className='size-1/2 border-2 border-gray-400 rounded-lg'/>
                <div className='flex flex-col gap-3 '>
                    <p className="max-w-1/2 border-2 border-gray-400 rounded-lg p-2">{game.short_description}</p>
                    <iframe src={`https://store.steampowered.com/widget/${id}/`} frameBorder="0" className='h-2/3 w-1/2'></iframe>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-6 '>
                {game.website && <a href={game.website} className='bg-blue-900 rounded-lg p-2 text-white hover:bg-blue-950 transition pl-6 pr-6'>Link</a>}
                <button className='bg-blue-900 rounded-lg p-2 text-white hover:bg-blue-950 transition pl-6 pr-6' onClick={() => navigate(-1)}>Go Back</button>
            </div>
            </div>
        </section>
    </section>
  );
}

export default GamesDetailPage;
