import React, { ReactNode } from "react";
import Head from "next/head";

import Nav from "./Header";
import Footer from "./Footer";

export default function Layout({ children, metaTitle }: {
  children: ReactNode, 
  metaTitle: ReactNode
}) {

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
          content={`https://abilitax.com`}
        />
        <link
          rel="canonical"
          href={`https://abilitax.com/skills`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abilitax" />
        <meta
          property="og:description"
          content="Collections of best curated resources to learn in demand skills"
        />
        <meta property="og:title" content="Abilitax" />
      </Head>
        <Nav />
        {children}
        <Footer />
    </>
  );
}