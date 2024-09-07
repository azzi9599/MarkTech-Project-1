import React from 'react';
import { NavLink } from 'react-router-dom';

const Imagesection = () => {
  return (
    <div className='bg-black'>

      <div className='text-center text-white pt-12'>
        <h2 className='text-2xl sm:text-3xl text-fuchsia-600'>PROJECT SPOTLIGHT</h2>
        <h1 className='text-4xl sm:text-6xl pt-4'>OUR WORK IN FOCUS</h1>
      </div>

      <ul className='flex flex-col gap-16 sm:flex-row justify-center items-center text-white pt-8 sm:pt-16'>
        <NavLink
          to="/all"
          className='text-center hover:text-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-transparent sm:border-b-0'
          activeClassName='border-fuchsia-700'
        >
          <li className='sm:mr-6'>All</li>
        </NavLink>

        <NavLink
          to="/Brand"
          className='text-center hover:text-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-transparent sm:border-b-0'
          activeClassName='border-fuchsia-700'
        >
          <li className='sm:mr-6'>BRAND IDENTITY</li>
        </NavLink>

        <NavLink
          to="/Packaging"
          className='text-center hover:text-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-transparent sm:border-b-0'
          activeClassName='border-fuchsia-700'
        >
          <li className='sm:mr-6'>PACKAGING DESIGN</li>
        </NavLink>

        <NavLink
          to="/Uiux"
          className='text-center hover:text-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-transparent sm:border-b-0'
          activeClassName='border-fuchsia-700'
        >
          <li className='sm:mr-6'>UI/UX DESIGN</li>
        </NavLink>

        <NavLink
          to="/Social"
          className='text-center hover:text-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 border-b-2 border-transparent sm:border-b-0'
          activeClassName='border-fuchsia-700'
        >
          <li>SOCIAL MEDIA MARKETING</li>
        </NavLink>
      </ul>

    </div>
  );
};

export default Imagesection;
