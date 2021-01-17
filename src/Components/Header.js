import React from "react";

const Header = () => {
  return (
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
          <div className="flex justify-between items-center border-b-2 border-blue-400 py-6 md:justify-center md:space-x-10">
            <nav className="md:flex space-x-10">
              <a href="/" className="text-xl font-medium text-black-500 hover:text-blue-500">
                Accueil
              </a>
              <a href="/leaflet" className="text-xl font-medium text-black-500 hover:text-blue-500">
                Leaflet Maps
              </a>
              <a href="/opendata" className="text-xl font-medium text-black-500 hover:text-blue-500">
                OpenDataSoft Api
              </a>
            </nav>
          </div>
        </div>
      </div>
  );
};

export default Header;