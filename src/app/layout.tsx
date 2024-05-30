import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abilitax',
  description: 'A collections of curated resources to learn in demand skills',

  generator: 'Abilitax',
  applicationName: 'Abilitax',
  referrer: 'origin-when-cross-origin',
  keywords: ['Abilitax', 'Skills', 'resoures'],
  authors: [{ name: 'Sitota' }, { name: 'Sitota Alemu', url: 'https://abilitax.netlify.app/' }],
  creator: 'Sitota Alemu',
  publisher: 'Sitota Alemu',



  metadataBase: new URL('https://abilitax.netlify.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },

  icons: {icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://abilitax.netlify.app/')]},

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },


  
  openGraph: {
    title: 'Abilitax',
    description: 'A collections of curated resources to learn in demand skills',
    url: 'https://abilitax.netlify.app/',
    siteName: 'Abilitax',
    images: [
      {
        url: 'https://abilitax.netlify.app/AbiliTax-logo.png',
        width: 800,
        height: 600,
        alt: 'Abilitax logo',
      },
      {
        url: 'https://abilitax.netlify.app/AbiliTax-logo.png',
        width: 1800,
        height: 1600,
        alt: 'Abilitax logo',
      },
      ],
      locale: 'en_US',
      type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abilitax',
    description: 'A collections of curated resources to learn in demand skills',
    creator: 'Abilitax',
    images: ['https://abilitax.netlify.app/AbiliTax-logo.png'],
  },


  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
};