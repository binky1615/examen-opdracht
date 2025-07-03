import React from "react";
import { useNavigate } from "react-router-dom";  // You need this for navigate
import reviewsData from '../reviewsData.js';
import SteamAPI from "../components/SteamAPI";

function HomePage() {
  const navigate = useNavigate();

  const gameIDs = [1449110, 2439280];

  return (
    <div className="min-h-screen p-4">
      <section className="flex flex-col md:flex-row justify-between gap-6">

        {/* Upcoming Games */}
        <div className="flex flex-col flex-1">
          <h1 className="mb-4 text-xl font-semibold">Upcoming Games</h1>
          <div className="flex flex-wrap gap-6">
            {gameIDs.map(id => (
              <img
                key={id}
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`}
                alt={`Cover for game ${id}`}
                className="w-full max-w-[460px] h-[215px] object-cover shadow-md border-2 border-gray-400 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                loading="lazy"
                onClick={() => navigate(`/games/${id}`)}
              />
            ))}
          </div>
        </div>

        {/* Latest News */}
        <div className="flex flex-col flex-1">
          <h1 className="mb-4 text-xl font-semibold">Latest News</h1>
          <SteamAPI gameIDs={gameIDs} />
        </div>

        {/* Latest Reviews */}
        <div className="flex flex-col flex-1">
          <h1 className="mb-4 text-xl font-semibold">Latest Reviews</h1>
          <div
            className="relative w-full max-w-[460px] h-[215px] shadow-md border-2 border-gray-400 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={() => navigate(`/reviews/${reviewsData[1].id}`)}  // example if you want navigation
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={reviewsData[1].image}
              alt={reviewsData[1].title}
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg p-2 text-center px-4">
              "{reviewsData[1].title}" door {reviewsData[1].writer}
            </h1>
          </div>
        </div>

      </section>
    </div>
  );
}

export default HomePage;
