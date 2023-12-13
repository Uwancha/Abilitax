'use client'

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";


const Nav: React.FC = () => {
    
    return (
        <div className="flex justify-between items-center py-2 sm:px-20 text-slategray bg-transparent">
            <Link href='/' className="flex items-center hover:opacity-50">
                <Image src={'/logo-.png'} alt='logo' className="w-[80px] sm:w-[150px]" width={100} height={150} priority />
                <h3 className="text-silver  font-bold sm:text-3xl" style={{marginLeft:'-15px'}}>Abilitax</h3>
            </Link>
            <nav className="flex">
                <Link href="/" className="text  mr-3 hover:opacity-50 sm:font-bold">Home</Link>
                <Link href="/skills" className="text mr-3 hover:opacity-50 sm:font-bold">Skills</Link>
                <Link href="/blog" className="text mr-3 hover:opacity-50 sm:font-bold">Blog</Link> 
                <Link href="/about" className="text mr-3 hover:opacity-50 sm:font-bold">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 