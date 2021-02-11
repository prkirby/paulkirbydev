import React, { ReactElement } from 'react'
import Layout from '../components/Layout'

export default function Home(): ReactElement {
  return (
    <Layout title="Paul Kirby Dev">
      <h1 className="font-sans">Hello! My name is Paul.</h1>
    </Layout>
  )
}
