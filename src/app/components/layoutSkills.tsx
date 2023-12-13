import React, { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children} : {children:ReactNode}) {

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>Abilitax | Skills </title>
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
        <meta property="og:title" content='Abilitax | Skills' />
      </Head>
        {children}
    </>
  );
}