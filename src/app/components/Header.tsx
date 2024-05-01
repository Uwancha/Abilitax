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
    <nav className="flex gap-3">
      <Link href="/" className="hover:opacity-50 sm:font-bold">Home</Link>
      <Link href="/skills" className="hover:opacity-50 sm:font-bold">Skills</Link>
      <Link href="/blog" className="hover:opacity-50 sm:font-bold">Blog</Link> 
      <Link href="/about" className="hover:opacity-50 sm:font-bold">About</Link>  
    </nav> 
  );
};

const NavLinks: React.FC<NavLinksProps> = ({ close }) => (
  <nav className="flex flex-col text-default items-start gap-10 mt-60">
    <Link href="/" onClick={close} className="text-2xl hover:opacity-50">
      Home
    </Link>
    <Link href="/skills" onClick={close} className="text-2xl hover:opacity-50">
      Skills
    </Link>
    <Link href="/blog" onClick={close} className="text-2xl hover:opacity-50">
      Blog
    </Link>
    <Link href="/about" onClick={close} className="text-2xl hover:opacity-50">
      About
    </Link>
  </nav>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isopen, mobile, toggleMenu }) => {
  return ( 
    <div>
      { mobile && 
        <FaBars 
          className="cursor-pointer mr-4"
          onClick={toggleMenu}
          size={30}
        /> 
      }

      { isopen && 
        <div className="fixed top-0 left-0 w-full h-full bg-black/70" onClick={toggleMenu}>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 px-20 text-silver" >
            <NavLinks close={toggleMenu} />
          
            <FaTimes
              className="absolute right-1 top-20 mr-4"
              onClick={toggleMenu}
              size={30}
            /> 
          </div>
        </div> 
      }
    </div> 
  );
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => setIsOpen(!isOpen);
    
  return (
    <div className="flex justify-between items-center py-1 sm:px-20 bg_midnight text-default position-fixed top-0">
      <Link href='/' className="flex items-center hover:opacity-50">
        <Image src={'/logo-.png'} alt='logo' className="w-[80px] sm:w-[150px]" width={100} height={150} priority />
        <h3 className="text-default  font-bold sm:text-3xl" style={{marginLeft:'-15px'}}>Abilitax</h3>
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