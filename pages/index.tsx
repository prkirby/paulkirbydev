import React, { ReactElement } from 'react'
import { Button, Container, Layout } from '../components/'

export default function Home(): ReactElement {
  return (
    <Layout title="Paul Kirby Dev">
      <Container className="flex flex-col flex-wrap content-center justify-center min-h-full">
        <div className="flex flex-col content-center justify-center">
          <h1 className="flex-none font-sans text-2xl font-thin text-center pb-4">
            Hello! My name is Paul.
          </h1>
          <div className="flex-none flex justify-center">
            <Button>Generative Works</Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
