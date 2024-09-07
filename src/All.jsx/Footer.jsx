import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='bg-black text-white px-6 py-10 md:px-12 lg:px-24 xl:px-32'>

        {/* Menu and Services Section */}
        <div className='flex justify-between'>
          {/* Menu Section */}
          <div className='p-4'>
            <h1 className='text-lg md:text-xl font-bold'>MENU</h1>
            <div className="border-b-2 border-fuchsia-600 w-12 md:w-20 mt-2 mb-3"></div>
            <ul className='list-none'>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>HOME</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>WORK</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>ABOUT</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>CAREER</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>BLOG</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>CONTACT</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className='p-4'>
            <h1 className='text-lg md:text-xl font-bold'>SERVICES</h1>
            <div className="border-b-2 border-fuchsia-600 w-12 md:w-20 mt-2 mb-3"></div>
            <ul className='list-none'>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>BRAND IDENTITY</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>PACKAGING DESIGN</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>UI/UX DESIGN</a></li>
              <li className='mb-2'><a href='#' className='hover:text-fuchsia-600'>SOCIAL MEDIA MARKETING</a></li>
            </ul>
          </div>

  {/* Contact and Social Media Section */}
  <div className='mt-8 md:mt-0'>
          <p className='mb-2'>56, NRI Colony, Mandakini Enclave, New Delhi - 110019</p>
          <p className='mb-2'>Ritik@marktechrover.com</p>
          <p className='mb-2'>+91 96541 65845</p>
          <p className='mb-4'>+91 96541 65845</p>
          <h1 className="text-xl md:text-2xl font-bold">LET'S GET IN TOUCH</h1>
          <div className="border-b-2 border-fuchsia-600 w-12 md:w-20 mt-2 mb-4"></div>
          <div className='flex gap-4'>
            <FaInstagram size={24} className='text-white hover:text-fuchsia-600' />
            <FaBehance size={24} className='text-white hover:text-fuchsia-600' />
            <FaLinkedin size={24} className='text-white hover:text-fuchsia-600' />
            <ImFacebook2 size={24} className='text-white hover:text-fuchsia-600' />
            <FaSquareTwitter size={24} className='text-white hover:text-fuchsia-600' />
          </div>
        </div>

        </div>

      
      
      </div>
    </>
  );
}

export default Footer;
