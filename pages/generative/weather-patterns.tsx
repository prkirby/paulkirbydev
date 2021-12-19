import React, { FC } from 'react'
import { Layout, Button, Container } from '@components'
import { H1 } from '@components/Headers'
import Link from 'next/link'
import { playATune } from '../../../generative-music'

const WeatherPatterns: FC = () => (
  <Layout title="Weather Patterns - A sketch by Paul Kirby">
    <Container>
      <H1>Nothing here yet.</H1>
      <Link href="/">
        <a>
          <Button>HOME</Button>
        </a>
      </Link>
      <Button onClick={() => playATune()}>Play a tune</Button>
    </Container>
  </Layout>
)

export default WeatherPatterns
