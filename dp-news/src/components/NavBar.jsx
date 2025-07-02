import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-blue-900 text-white py-4 px-12 flex justify-between items-center">
      <div className="text-xl font-bold size-9">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
      </div>
      <ul className="flex space-x-12">
        <li>
          <Link to="/News" className="text-gray-500 hover:text-gray-700">News</Link>
        </li>
        <li>
          <Link to="/Games" className="text-gray-500 hover:text-gray-700">Games</Link>
        </li>
        <li>
          <Link to="/Reviews" className="text-gray-500 hover:text-gray-700">Reviews</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-gray-500 hover:text-gray-700">Contact</Link>
        </li>
        <ul>

        {/* DROPDOWN */}
        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-500 hover:text-purple-700 focus:outline-none"
          >
            <img src="/account.png" alt="" className='size-2/6' />
          </button>
          {isOpen && (
            <ul className="absolute mt-2 bg-white text-purple-700 rounded shadow-lg w-32 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/Login">LOGIN</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/Register">REGISTER</Link>
              </li>

            </ul>
          )}
        </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;