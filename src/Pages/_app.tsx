import type { AppProps } from 'next/app'
import '../globals.css'
import { Inter } from '@next/font/google'
import Head from 'next/head'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
         <link rel="shortcut icon" href="/favicon.png" />
      </Head>
    
      <main className={`${inter.variable} min-h-screen font-sans flex justify-center items-center flex-col`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}