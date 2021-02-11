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
    <div className="container">{children}</div>
  </>
)

export default Layout
