import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
)

export default Layout
