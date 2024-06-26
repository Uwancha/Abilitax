'use client'

import React, { ReactNode } from "react";
import Head from "next/head";

export default function Layout({children}:{children:ReactNode}) {

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
          content={`https://abilitax.netlify.app/`}
        />
        <link
          rel="canonical"
          href={`https://abilitax.netlify.app/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abilitax" />
        <meta
          property="og:description"
          content="Collections of best curated resources to learn in demand skills"
        />
        <meta property="og:title" content='Abilitax' />
      </Head>
        {children}
    </>
  );
}