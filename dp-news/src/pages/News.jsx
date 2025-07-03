import React from "react";
import SteamAPI from "../components/SteamAPI";

function News() {
  const gameIDs = [3159330, 1623730, 2201320];

  return (
    <div>
      <h1>Steam Games News</h1>
      <SteamAPI gameIDs={gameIDs} />
    </div>
  );
}

export default News;
