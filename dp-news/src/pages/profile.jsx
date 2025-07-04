import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const [image, setImage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }

    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      window.location.reload();

      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center space-y-4">
      <h1 className="scale-150">hello there {localStorage.getItem("userName")}</h1>
      <h2 className="text-xl font-semibold">Upload je profielfoto</h2>
      {image ? (
        <img
          src={image}
          alt="Profile Preview"
          className="w-32 h-32 object-cover rounded-full border"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 border">
          Geen afbeelding
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="cursor-pointer"
      />
      <button
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
          
        }}
      >
        Go Fuck Yourself
      </button>
      <div className="flex flex-col gap-2 mt-4 justify-center items-center">
        <h2 className="text-xl font-semibold">Favoriete games</h2>
        <div className="space-y-2 flex flex-row justify-center items-center overflow-x-auto gap-2 scrollbar-hide max-w-full">
            {favorites.map((game, index) => (
                <img key={index} src={game.header_image} alt={`Game ${index}`} onClick={() => navigate(`/games/${game.steam_appid}`)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
