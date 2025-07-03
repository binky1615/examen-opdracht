import React from "react";
import images from '../images.js';
import { href, useNavigate } from "react-router-dom";

function Games() {

  const navigate = useNavigate();

  const gameIDs = [1888930, //The Last of Us Part 1
                   1623730, //Palworld
                   2201320, //Date Everything
                   1091500, //Cyberpunk 2077
                   1903340, //Claire Obscur
                   1086940, //Bladurs gate 3
                   1245620, //Elden Ring
                   2420110, //Horizon Forbidden West
                   1172710, //Dune Awakening
                   1177980, //Little Kitty, Big City
                   1332010, //Stray
                   2660460, //Aviassembly
                   1954200, //Kena Bridge of Spirits
                   1307580, //TOEM
                   2933620, //COD BO6
                   2420660, //NEVA
                  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-center">
        <a href={images[0].url} target="_blank" rel="noopener noreferrer">
          <img className="w-full max-w-sm" src={images[0].image} alt={images[0].title} />
        </a>
        <a href={images[1].url} target="_blank" rel="noopener noreferrer">
          <img className="w-full max-w-sm" src={images[1].image} alt={images[1].title} />
        </a>
        <a href={images[2].url} target="_blank" rel="noopener noreferrer">
          <img className="w-full max-w-sm" src={images[2].image} alt={images[2].title} />
        </a>
        <a href={images[3].url} target="_blank" rel="noopener noreferrer">
          <img className="w-full max-w-sm" src={images[3].image} alt={images[3].title} />
        </a>
      </div>

      <div className="flex flex-row gap-6 flex-wrap mb-12">
        {gameIDs.map(id => (
          <img
            key={id}
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`}
            alt={`Cover for game ${id}`}
            className="w-full max-w-[460px] h-[215px] object-cover shadow-md border-2 border-gray-400 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            loading="lazy"
            onClick={() => navigate(`/games/${id}`)}
          />
        ))}
      </div>
    </section>
  );
}

export default Games;


