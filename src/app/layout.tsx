import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Head from 'next/head'
import { Suspense } from 'react'
import NotFound from './404'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abilitax',
  description: 'A collections of curated resources to learn in demand skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
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

        
        <meta property="og:title" content='Abilitax' />
        <meta property="og:description" content='A collections of curated resources to learn in demand skills' />
        <meta property="og:image" content='/AbiliTax-logo (1).png' /> 
        <meta property="og:image:width" content="630" /> 
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='Abilitax' />
        <meta name="twitter:description" content='A collections of curated resources to learn in demand skills' />
        <meta name="twitter:image" content='./AbiliTax-logo (1).png' /> 

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>
      <Suspense fallback={<NotFound />}>
      <body className={inter.className}>
        {children}
      </body>
      </Suspense>
    </html>
  )
}
