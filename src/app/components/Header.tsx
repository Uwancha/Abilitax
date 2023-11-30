'use client'

import React, { useState, useEffect } from "react";

import Link from "next/link";


const Nav: React.FC = ({sty}) => {

    return (
        <div className="flex justify-between py-10" style={sty}>
            <h3 className="header-h3 text-2xl font-bold">Merek Verse</h3>
            <nav className="flex">
                <Link href="/" className="text font-bold mr-3">Home</Link>
                <Link href="/skills" className="text font-bold mr-3">Skills</Link>
                <Link href="/blog" className="text font-bold mr-3">Blog</Link> 
                <Link href="/about" className="text font-bold mr-3">About</Link>  
            </nav>
        </div>
    )
}

export default Nav; 