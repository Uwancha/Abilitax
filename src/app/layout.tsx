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
        <title>Abilitax</title>
        <meta name="description" content='A collections of curated resources to learn in demand skills' />

        <meta property="og:title" content='Abilitax'/>
        <meta property="og:description" content='A collections of curated resources to learn in demand skills' />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='Abilitax' />
        <meta name="twitter:description" content='A collections of curated resources to learn in demand skills' />

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
