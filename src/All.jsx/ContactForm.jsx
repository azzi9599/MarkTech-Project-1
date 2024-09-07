// ContactForm.js
import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (

    <div className='bg-black' >
      <div className='flex items-center justify-center'>
       <div className="text-left md:mr-16 text-white items-center text=center" >
        <h1 className="text-4xl md:text-5xl font-bold">LET'S GET IN TOUCH</h1>
        <div className="border-b-2 border-fuchsia-600 w-110 mt-2"></div>
      </div></div>
    <div className="  flex flex-col md:flex-row justify-center pt-10 min-h-screen bg-black text-white px-4">
     
      
      <div className="p-8 max-w-screen-lg w-full">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Company/Organization</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Country</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Describe Your Project...</label>
            <textarea className="w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-pink-500" rows="4"></textarea>
          </div>
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-fuchsia-600 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition">
              SUBMIT MESSAGE
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-row md:flex-col gap-8 mt-8 md:mt-0 md:ml-16 justify-center md:justify-start px-12">
        <div><FaInstagram size={40} /></div>
        <div><FaBehance size={40} /></div>
        <div><FaLinkedin size={40} /></div>
        <div><ImFacebook2 size={40} /></div>
        <div><FaSquareTwitter size={40} /></div>
      </div>
    </div>



    </div>
  );
};

export default ContactForm;
