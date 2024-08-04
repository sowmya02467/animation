import React, { useState } from 'react';
import closeicon from '../assets/Vector (3).png';
import searchicon from '../assets/Vector (2).png';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center mt-5">
      <div className="relative flex items-center bg-white bg-opacity-75 rounded-md w-[450px] h-[64px] pl-6">
        <div
          className={`flex items-center bg-white rounded-2xl border border-solid border-cyan-400 transition-all duration-300 ${isOpen ? 'w-[350px]' : 'w-[100px]'} h-[42px] ml-auto`}
          style={{ position: 'relative' }}
        >
          <img
            src={searchicon}
            alt="Search Icon"
            className="w-[20px] h-[20px] ml-2 cursor-pointer"
            onClick={handleToggle}
            style={{ order: 1, visibility: isOpen ? 'visible' : 'visible' }}
          />
          <input
            type="text"
            placeholder="Search here"
            className={`border-none outline-none h-full transition-all duration-300 ${isOpen ? 'w-full px-4' : 'w-0 px-0'}`}
            style={{ order: 2 }}
          />
          <img
            src={closeicon}
            alt="Close Icon"
            className="w-[20px] h-[20px] ml-2 cursor-pointer"
            onClick={handleToggle}
            style={{ order: 3, visibility: isOpen ? 'visible' : 'hidden' }}
          />
        </div>
      </div>
      <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md">Join Community</button>
    </div>
  );
};

export default SearchBar;
