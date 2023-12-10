'use client'

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";


const Nav: React.FC = ({sty}) => {
    
    return (
        <div className="flex justify-between py-10" style={sty}>
            <Link href='/' className="flex items-center hover:opacity-50">
                <Image src={'/logo-.png'} alt='logo' width={100} height={150} priority />
                <h3 className="text-silver text-3xl font-bold" style={{marginLeft:'-20px'}}>Abilitax</h3>
            </Link>
            <nav className="flex">
                <Link href="/" className="text font-bold mr-3 hover:opacity-50">Home</Link>
                <Link href="/skills" className="text font-bold mr-3 hover:opacity-50">Skills</Link>
                <Link href="/blog" className="text font-bold mr-3 hover:opacity-50">Blog</Link> 
                <Link href="/about" className="text font-bold mr-3 hover:opacity-50">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 