import React, { useState, useEffect } from "react";

function profile() {
  const [image, setImage] = useState(null);

    useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };

      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
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
    </div>
  );
}

export default profile;