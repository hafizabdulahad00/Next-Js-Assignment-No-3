import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='bg-gray-900 px-5 py-8 md:px-10 md:py-16 flex flex-col md:flex-row justify-between items-center'>
        <div>
          <h4 className='font-medium text-yellow-500 text-lg md:text-2xl'>&#169; Abdul Ahad | All Rights Reserved</h4>
        </div>
        <div className='flex gap-4 mt-4 md:mt-0'>
          <FaXTwitter className='text-yellow-500 text-2xl hover:text-yellow-300' />
          <FaInstagram className='text-yellow-500 text-2xl hover:text-yellow-300' />
          <FaDribbble className='text-yellow-500 text-2xl hover:text-yellow-300' />
        </div>
      </div>
      


    )
}

export default Footer