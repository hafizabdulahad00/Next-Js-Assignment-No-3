import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
      <div className='flex flex-col md:flex-row py-3 px-5 md:px-10 justify-between items-center bg-gray-900 border-b border-yellow-500'>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkBZtAbLQk2JaeG3euksBG7nSb83XU3WyuQ&s" alt="Logo" className='h-32 w-48' />
      </div>
      <div>
        <ul className='flex flex-col md:flex-row gap-5 md:gap-10 font-mono text-lg text-yellow-500 hover:text-yellow-300'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
      );
  }
  
  export default Header