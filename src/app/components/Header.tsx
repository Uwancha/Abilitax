'use client'

import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from 'react-icons/fa';

import Link from "next/link";
import Image from "next/image";

// Define interfaces
interface MobileMenuProps {
  isopen: boolean;
  mobile: boolean; 
  toggleMenu: () => void;
};

interface NavLinksProps {
  close: () => void;
};

const DesktopMenu = () => {
  return (
    <nav className="flex gap-3 sunshine">
      <Link href="/" className="opacity-50 hover:opacity-100 transition duration-1000 ease-in-out">Home</Link>
      <Link href="/skills" className="opacity-50 hover:opacity-100 transition duration-1000 ease-in-out">Skills</Link>
      <Link href="/blog" className="opacity-50 hover:opacity-100 transition duration-1000 ease-in-out">Blog</Link> 
      <Link href="/about" className="opacity-50 hover:opacity-100 transition duration-1000 ease-in-out">About</Link>  
    </nav> 
  );
};

const NavLinks: React.FC<NavLinksProps> = ({ close }) => (
  <nav className="w-full z-200 flex bg_sunshine text-default justify-center gap-8 mt-24 py-8">
    <Link href="/" onClick={close} className="hover:opacity-50">
      Home
    </Link>
    <Link href="/skills" onClick={close} className="hover:opacity-50">
      Skills
    </Link>
    <Link href="/blog" onClick={close} className="hover:opacity-50">
      Blog
    </Link>
    <Link href="/about" onClick={close} className="hover:opacity-50">
      About
    </Link>
  </nav>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isopen, mobile, toggleMenu }) => {
  return ( 
    <div>
      { isopen ?
        <div className="fixed top-0 left-0 w-full h-full" onClick={toggleMenu}>
          <div className="absolute top-0 left-0 w-full h-full text-silver" >
            <NavLinks close={toggleMenu} />
          
            <FaTimes
              className="absolute sunshine right-1 top-6 mr-4"
              onClick={toggleMenu}
              size={30}
            /> 
          </div>
        </div> 
        : 
        <FaBars 
          className="cursor-pointer mr-4 sunshine"
          onClick={toggleMenu}
          size={30}
        />
      }
    </div> 
  );
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => setIsOpen(!isOpen);
    
  return (
    <div className="flex justify-between items-center py-4 sm:px-20 bg_midnight text-default position-fixed top-0">
      <Link href='/' className="flex items-center opacity-60 hover:opacity-90">
        <Image src={'/logo-.png'} alt='logo' className="w-[80px] sm:w-[150px]" width={100} height={150} priority />
        <h3 className="text-default font-bold sm:text-2xl" style={{marginLeft:'-15px'}}>Abilitax</h3>
      </Link>

      {isMobile ? 
      (
        <MobileMenu mobile={isMobile} isopen={isOpen} toggleMenu={toggleMenu} />
      ) : ( 
        <DesktopMenu />  
      ) }
    </div>
  );
};

export default Nav; 