'use client'

import React from "react";
import Head from "next/head";

import Nav from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
  const headerStyle = {
    backgroundColor: 'transparent', 
    transition: 'background-color 1.5s ease',
    position: 'absolute',
    width: '100%',
    top: 0,
    color: "#fff",
  }

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>Abilitax</title>
        <meta
          content="Collections of best curated resources to learn in demand skills in 2024"
          name="description"
        />
        <meta
          property="og:url"
          content={`https://abilitax.com`}
        />
        <link
          rel="canonical"
          href={`https://abilitax.com`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abilitax" />
        <meta
          property="og:description"
          content="Collections of best curated resources to learn in demand skills"
        />
        <meta property="og:title" content='Abilitax' />
      </Head>
        <Nav sty={headerStyle}/>
        {children}
        <Footer />
    </>
  );
}