import React from 'react';
import { TbBrand4Chan } from "react-icons/tb";
import { CgDesignmodo } from "react-icons/cg";
import { SlSocialReddit } from "react-icons/sl";
import { PiDotsNineBold } from "react-icons/pi";

const Services = () => {
  return (
    <div className='bg-black w-full min-h-screen flex flex-col items-center justify-center'>
      <div className="text-center text-white pt-8 px-4">
        <p className="text-lg text-fuchsia-700">Remember Us for</p>
        <h1 className='text-4xl md:text-5xl font-extrabold text-white tracking-widest my-4'>Our Services</h1>
      </div>
      <div className="flex gap-6 flex-col sm:flex-row p-12">

        {/* Service 1 */}
        <div className="bg-zinc-900 flex flex-col p-4 sm:p-4 md:p-6 border border-white">
          <p className='text-3xl text-fuchsia-700'><TbBrand4Chan/></p>
          
          <h1 className='text-xl md:text-2xl font-bold text-fuchsia-700 my-2'>BRAND IDENTITY</h1>
          <p className='text-sm md:text-base text-white'>
            Brand identity is the strategic process of shaping a brand in consumers' minds, helping 
            them quickly identify its unique identity and value.
          </p>
          <button className="border border-white text-white font-bold py-2 px-4 w-full mt-4">EXPLORE</button>
        </div>

        {/* Service 2 */}
        <div className="bg-zinc-900 flex flex-col p-4 sm:p-4 md:p-6 border border-white">
          <p className='text-3xl text-fuchsia-700'><PiDotsNineBold/></p>
          <h1 className='text-xl md:text-2xl font-bold text-fuchsia-700 my-2'>PACKAGING DESIGN</h1>
          <p className='text-sm md:text-base text-white'>
            Packaging design is the creative and strategic process of designing the exterior packaging and presentation 
            of a product.
          </p>
          <button className="border border-white text-white font-bold py-2 px-4 w-full mt-4">EXPLORE</button>
        </div>

        {/* Service 3 */}
        <div className="bg-zinc-900 flex flex-col p-4 md:p-6 border border-white">
          <p className='text-3xl text-fuchsia-700'><CgDesignmodo/></p>
          <h1 className='text-xl md:text-2xl font-bold text-fuchsia-700 my-2'>UI/UX DESIGN</h1>
          <p className='text-sm md:text-base text-white'>
            Centered on crafting user-friendly and captivating digital experiences, with a primary emphasis on websites and applications.
          </p>
          <button className="border border-white text-white font-bold py-2 px-4 w-full mt-4">EXPLORE</button>
        </div>

        {/* Service 4 */}
        <div className="bg-zinc-900 flex flex-col p-4 md:p-6 border border-white">
          <p className='text-3xl text-fuchsia-700'><SlSocialReddit/></p>
          <h1 className='text-xl md:text-2xl font-bold text-fuchsia-700 my-2'>SOCIAL MEDIA MARKETING</h1>
          <p className='text-sm md:text-base text-white'>
            The art of leveraging the digital landscape to showcase products, services, and brands by crafting compelling narratives.
          </p>
          <button className="border border-white text-white font-bold py-2 px-4 w-full mt-4">EXPLORE</button>
        </div>

      </div>
    </div>
  );
};

export default Services;
