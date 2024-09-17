'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [showInhalte, setShowInhalte] = useState(false);
  const [showCareer, setShowCareer] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleSearch = (event) => {
    const query = event.target.value;
    // Simulate search suggestions
    if (query.length > 1) {
      setSearchSuggestions(["Lernvideos", "Jobs", "Ausbildung"]);
    } else {
      setSearchSuggestions([]);
    }
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="mx-5 flex justify-between items-center  px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <img src="/logo.svg" alt="Logo" className="h-7" />

          {/* Alle Inhalte Dropdown */}
          <div className="relative flex justify-center cursor-pointer" onClick={() => setShowInhalte(!showInhalte)}>
          <img src="/Menu.svg" alt="Logo" className="h-7" />
            <button
              
              className="ml-4 text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Alle Inhalte
            </button>
            {showInhalte && (
              <div className="absolute  mt-12 rounded-lg bg-white border border-gray-200 shadow-lg w-80 z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer flex w-full justify-around"><img src='/rocket.svg' className='w-[20%] h-6'></img><span>Learn Videos</span><img src='/drop.svg' className='w-[10%] h-7'></img></li>
                  <hr/>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer flex w-full justify-around"><img src='/rocket.svg' className='w-[20%] h-6'></img><span>Learn Videos</span><img src='/drop.svg' className='w-[10%] h-7'></img></li>
                  <hr/>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer flex w-full justify-around"><img src='/rocket.svg' className='w-[20%] h-6'></img><span>Learn Videos</span><img src='/drop.svg' className='w-[10%] h-7'></img></li>

                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow w-full max-w-lg mx-6 hidden md:block">
          <input
            type="text"
            placeholder="Suche nach Lerninhalten..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            onChange={handleSearch}
          />
          {searchSuggestions.length > 0 && (
            <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg w-full mt-1 z-20">
              {searchSuggestions.map((suggestion, index) => (
                <p key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {suggestion}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Karrierewelt and Login/Register */}
        <div className="flex items-center">
          {/* Karrierewelt Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCareer(!showCareer)}
              className="mr-4 text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Neu: Karrierewelt
            </button>
            {showCareer && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg w-48 z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Jobsuche</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Praktika</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Beratung</li>
                </ul>
              </div>
            )}
          </div>

          {/* Login/Register */}
          <button
            onClick={() => setShowLoginPopup(true)}
            className="mr-4 text-blue-600 font-semibold hover:underline transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => setShowLoginPopup(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Registrieren
          </button>
        </div>
      </div>

      {/* Login/Register Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Login/Register</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300 w-full">
                Login
              </button>
            </form>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="mt-4 text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
