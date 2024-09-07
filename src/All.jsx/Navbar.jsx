// Navbar.js
import React, { useState } from 'react';
import { TfiLineDouble } from 'react-icons/tfi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 fixed w-full text-white bg-transparent z-50">
      <div className="flex gap-3 font-bold text-2xl sm:text-3xl">
        <h1>MarkTechRover</h1>
        <div className="ml-2 h-10 text-white font-normal text-xs border-gray-400 border-l-4 hidden sm:block">
          <h1 className="pl-3 leading-4"> PURPOSEFUL DESIGNS, <br />DELIGHTFUL EXPERIENCES</h1>
        </div>
      </div>

      <div className="hidden lg:flex space-x-8 mr-8 items-center">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <a href="mailto:info@greyspacestudios.com" className="text-white">Email: Ritik@marktechrover.com</a>
          <span className="lg:ml-4 text-white">+91 9999777722</span>
        </div>
        <button className="text-white h-12 px-8 py-2 border hover:bg-white hover:text-black">CONTACT US</button>
        <div className="pt-2"><TfiLineDouble size={35} /></div>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4">
          <a href="mailto:info@greyspacestudios.com" className="text-white">Email: Ritik@marktechrover.com</a>
          <span className="text-white">+91 9999777722</span>
          <button className="text-white h-12 px-8 py-2 border hover:bg-white hover:text-black">CONTACT US</button>
          <div className="pt-2"><TfiLineDouble size={35} /></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
