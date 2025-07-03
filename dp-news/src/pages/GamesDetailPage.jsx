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
    <section className="min-h-screen flex flex-row gap-8 justify-center items-center text-center p-8 text-gray-400 ">
        <section>
            <div>
            <h1 className='text-3xl pb-4'>{game.name}</h1>
            <div className="flex flex-row justify-center items-center gap-6 mb-4 ">
                <img src={game.header_image} alt={game.name} className='size-1/2 border-2 border-gray-400 rounded-lg'/>
                <div className='flex flex-col gap-3 '>
                    <p className="max-w-1/2 border-2 border-gray-400 rounded-lg p-2">{game.short_description}</p>
                    <iframe src={`https://store.steampowered.com/widget/${id}/`} frameborder="0" className='h-2/3 w-1/2'></iframe>
                </div>
            </div>
            {game.website && <a href={game.website}>Link</a>}
            </div>
        </section>
    </section>
  );
}

export default GamesDetailPage;
