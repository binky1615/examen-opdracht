import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // new state for profile image

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");

    // Load profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <nav className="bg-blue-900 text-white py-4 px-12 flex justify-between items-center">
      <div className="text-xl font-bold size-9">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
      </div>

      <ul className="flex space-x-12 mt-2">
        <li><Link to="/News" className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-200 transition">News</Link></li>
        <li><Link to="/Games" className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-200 transition">Games</Link></li>
        <li><Link to="/Reviews" className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-200 transition">Reviews</Link></li>
        <li><Link to="/Contact" className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-200 transition">Contact</Link></li>

        {/* Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 focus:outline-none"
          >
            <section className='flex flex-row items-center gap-2 cursor-pointer'>
              {!isLoggedIn && (
                <img 
                  src={profileImage || "/account.png"} 
                  alt="Account" 
                  className="w-8 h-8 rounded-full object-cover" 
                />
              )}
              {isLoggedIn && (
                <>
                  <img 
                    src={profileImage || "/account.png"} 
                    alt="Account" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  <Link>{localStorage.getItem("userName")}</Link>
                </>
              )}
            </section>
          </button>

          {isOpen && (
            <ul className="absolute mt-2 bg-blue-900 text-gray-500 rounded shadow-lg w-32 z-10">
              {isLoggedIn ? (
                <>
                  <li className="px-4 py-2 hover:bg-blue-950">
                    <Link to="/Profile">PROFILE</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        setIsLoggedIn(false);
                        Navigate(-1);
                      }}
                      className="px-4 py-2 hover:bg-blue-950"
                    >
                      LOGOUT
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="px-4 py-2 hover:bg-blue-950">
                    <Link to="/Login">LOGIN</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-950">
                    <Link to="/Register">REGISTER</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

