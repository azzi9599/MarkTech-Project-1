import React from 'react';
import Navbar from './Navbar';

const Vidsection = () => {
  return (
    <div className='bg-black'>

      <Navbar />

      <div className='text-center text-white pt-24'>
        <h2 className='text-3xl text-fuchsia-600'>WELCOME TO MARKTECHROVER</h2>
        <h1 className='text-2xl sm:text-5xl lg:text-7xl pt-5'>WE ARE A LEADING DESIGN STUDIO</h1>
        <h1 className='text-2xl sm:text-5xl lg:text-7xl pt-5'>WHICH CATALYZES THE CHANGE</h1>
        <h1 className='text-2xl sm:text-5xl lg:text-7xl pt-5'>YOUR BRAND SECRETLY CRAVES</h1>
      </div>

      <div className='lg:p-12 sm:p-4 bg-black w-full mx-auto mt-10 md:mt-24'>
        <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
          {/* 16:9 aspect ratio container */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Vidsection;
