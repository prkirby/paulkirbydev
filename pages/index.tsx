import React, { ReactElement } from 'react'
import Link from 'next/link'
import { Layout, Container, Button } from '@components'
import { H1 } from '@components/Headers'

export default function Home(): ReactElement {
  return (
    <Layout title="Paul Kirby Dev">
      <Container>
        <div className="flex flex-col content-center justify-center">
          <H1>Hello! My name is Paul.</H1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/generative" prefetch={false}>
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
