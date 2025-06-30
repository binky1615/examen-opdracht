import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-12 flex justify-between items-center">
      <div className="text-xl font-bold size-9">
        <Link to="/" className="text-purple-500 hover:text-purple-700">Home</Link>
      </div>
      <ul className="flex space-x-12">
        <li>
          <Link to="/News" className="text-purple-500 hover:text-purple-700"></Link>
        </li>
        <li>
          <Link to="/Games" className="text-purple-500 hover:text-purple-700"></Link>
        </li>
        <li>
          <Link to="/Reviews" className="text-purple-500 hover:text-purple-700"></Link>
        </li>
        <li>
          <Link to="/Contact" className="text-purple-500 hover:text-purple-700"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;