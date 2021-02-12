import React, { ReactElement } from 'react'
import Link from 'next/link'
import { Button, Container, Layout } from '../components/'

export default function Home(): ReactElement {
  return (
    <Layout title="Paul Kirby Dev">
      <Container className="flex flex-col flex-wrap content-center justify-center min-h-full">
        <div className="flex flex-col content-center justify-center">
          <h1 className="flex-none font-sans text-2xl md:text-3xl font-thin text-center pb-4">
            Hello! My name is Paul.
          </h1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/generative/falling-ocean" prefetch={false}>
              <a className="w-full text-center">
                <Button>Generative Works</Button>
              </a>
            </Link>
            <a
              className="w-full text-center"
              href="https://github.com/prkirby"
              target="blank"
            >
              <Button>GitHub</Button>
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
