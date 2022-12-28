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
    <main className={`${inter.variable} h-screen font-sans flex justify-center items-center flex-col`}>
      <Head>
         <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
