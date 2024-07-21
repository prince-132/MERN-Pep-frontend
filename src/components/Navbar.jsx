import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <div className="text-xl font-bold">
          <NavLink to="/" exact className="hover:text-yellow-300">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/559/272/original/reach-the-best-for-job-seekers-logo-premium-free-vector.jpg"
              alt="Logo"
              className="h-12 rounded-3xl"
            />
          </NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-yellow-400 text-black' : 'hover:bg-indigo-700'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-yellow-400 text-black' : 'hover:bg-indigo-700'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
