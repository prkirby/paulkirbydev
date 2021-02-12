import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
}

export const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="flex font-sans font-light min-h-screen bg-gray-100">
      {children}
    </div>
  </>
)
