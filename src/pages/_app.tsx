import type { AppProps } from 'next/app'
import '../globals.css'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider>
      <Head>
         <link rel="shortcut icon" href="/favicon.png" />
      </Head>
    
      <div className={`${inter.variable} min-h-screen font-sans flex justify-center items-center flex-col h-full overflow-x-hidden`}>
        

        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}