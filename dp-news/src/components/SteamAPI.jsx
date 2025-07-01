import React, { useEffect, useState } from 'react';

function SteamAPI({ gameIDs }) {
  const [gamesNews, setGamesNews] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!gameIDs || gameIDs.length === 0) {
      setGamesNews({});
      setErrors({});
      return;
    }

    setLoading(true);
    setErrors({});

    Promise.all(
      gameIDs.map(id =>
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${id}&count=3&maxlength=300&format=json`)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
          })
          .then(data => ({ id, news: data.appnews?.newsitems || [] }))
          .catch(err => {
            console.error(`Error fetching news for game ${id}:`, err);
            return { id, news: [], error: err.message || 'Unknown error' };
          })
      )
    ).then(results => {
      const newsObj = {};
      const errorsObj = {};
      results.forEach(({ id, news, error }) => {
        newsObj[id] = news;
        if (error) errorsObj[id] = error;
      });
      setGamesNews(newsObj);
      setErrors(errorsObj);
      setLoading(false);
    });
  }, [gameIDs]);

  if (!gameIDs || gameIDs.length === 0) {
    return <p>No games selected.</p>;
  }

  return (
    <div>
      {loading && <p>Loading news...</p>}

      {gameIDs.map(id => (
        <div key={id} style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <img
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`}
            alt={`Cover for game ${id}`}
            style={{ width: '460px', height: '215px', objectFit: 'cover', marginBottom: '1rem' }}
            loading="lazy"
          />
          {errors[id] && (
            <p style={{ color: 'red' }}>Error loading news: {errors[id]}</p>
          )}

          {!loading && !errors[id] && (
            <div>
              {gamesNews[id] && gamesNews[id].length > 0 ? (
                gamesNews[id].map(news => (
                  <div key={news.gid} style={{ marginBottom: '1rem' }}>
                    <h3>{news.title}</h3>
                    <p>{news.contents}</p>
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      Read more
                    </a>
                  </div>
                ))
              ) : (
                <p>No news available.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SteamAPI;
