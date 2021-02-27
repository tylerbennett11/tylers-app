import Head from 'next/head'

import {Footer} from './footer'

export function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Tyler’s App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 px-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}