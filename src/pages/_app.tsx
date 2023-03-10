import type { AppProps } from 'next/app'
import '../globals.css'
import { Inter } from '@next/font/google'
import Head from 'next/head'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
         <link rel="shortcut icon" href="/favicon.png" />
      </Head>
    
      <div className={`${inter.variable} min-h-screen font-sans flex justify-center items-center flex-col h-full overflow-x-hidden`}>
        

        <Component {...pageProps} />
      </div>
    </>
  )
}
