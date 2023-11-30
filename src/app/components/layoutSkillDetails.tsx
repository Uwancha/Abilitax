import React from "react";
import Head from "next/head";

import Nav from "./Header";
import Footer from "./Footer";

export default function Layout({ children, metaTitle }) {

  const headerStyle = { 
    backgroundColor: "#fff",
    position: 'fixed',
    width: '100%',
    top: 0,
    color: "slategray",

    padding: "1rem 15rem",
    boxShadow:  'rgba(50, 50, 93, 0.1) 0px 13px 27px -15px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px',

  }

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>{metaTitle}</title>
        <meta
          content="collections of best curated resources to learn in demand skills in 2023"
          name="description"
        />
        <meta
          property="og:url"
          content={`https://merekverse.com`}
        />
        <link
          rel="canonical"
          href={`https://merekverse.com/skills`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Merek Verse" />
        <meta
          property="og:description"
          content="Collections of best curated resources to learn in demand skills"
        />
        <meta property="og:title" content={metaTitle} />
      </Head>
        <Nav sty={headerStyle}/>
        {children}
        <Footer />
    </>
  );
}