'use client'

import React, { useState, useEffect } from "react";

import Link from "next/link";


const Nav: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrollPosition > 30 ? '#fff' : 'transparent', 
    transition: 'background-color .5s ease',
    position: 'fixed',
    width: '100%',
    top: 0,

    padding: "2rem 4rem",
    boxShadow: scrollPosition > 30 ? 'rgba(50, 50, 93, 0.1) 0px 13px 27px -15px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px' : 'none'

  }


    return (
        <div className="flex justify-between py-10" style={headerStyle}>
            <h3 className="header-h3">Merek Verse</h3>
            <nav className="flex">
                <Link href="/" className="text-slategray font-bold mr-3">Home</Link>
                <Link href="/skills" className="text-slategray font-bold mr-3">Skills</Link>
                <Link href="/blog" className="text-slategray font-bold mr-3">Blog</Link> 
                <Link href="/about" className="text-slategray font-bold mr-3">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 