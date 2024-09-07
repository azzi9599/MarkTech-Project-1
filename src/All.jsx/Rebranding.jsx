import React from 'react';

const Rebranding = () => {
  return (
    <div className=' '>
    <div className='bg-black   pb-12 px-4 sm:pt-48 sm:pb-24 sm:px-0'>
      <h2 className='text-3xl text-fuchsia-600 text-center'>FROM OUR BLOG</h2>
      <h1 className='text-5xl sm:text-7xl pt-5 text-center text-white'>THE LATEST IN DESIGN</h1>

      <div className='grid grid-cols-1 px-8 sm:grid-cols-3 gap-4 text-white mt-6 sm:mt-24'>
        <div className='text-center'>
          <img src="https://cdn.prod.website-files.com/5fb66f27ac4ca524643ee14a/664b3e6a204878ff9f41f667_Blog%20Thumbnail.png" alt="" className='mx-auto' />
          <h1 className='text-xl mt-2'>Cost & Timeline For Rebranding</h1>
        </div>

        <div className='text-center mt-12 sm:mt-0'>
          <img src="https://cdn.prod.website-files.com/5fb66f27ac4ca524643ee14a/64e086a05220ff8b859fdf5b_62133b7165720936c4b0d678_Blog-Post-Medium.webp" alt="" className='mx-auto' />
          <h1 className='text-xl mt-2'>Secrets To Building a Strong Brand Identity</h1>
        </div>

        <div className='text-center mt-12 sm:mt-0'>
          <img src="https://cdn.prod.website-files.com/5fb66f27ac4ca524643ee14a/64e11af7bafc82481762eb4b_6203be0f8e557b63d0649a20_Blog%20Post%20Large%20Medium.webp" alt="" className='mx-auto' />
          <h1 className='text-xl mt-2'>When is The Right Time to Rebrand</h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Rebranding;
