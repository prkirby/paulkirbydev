import React from 'react'
import { Layout, Button, Container } from '@components'
import { H1 } from '@components/Headers'
import Link from 'next/link'

const worksToDisplay = [
  {
    name: 'Falling Ocean',
    link: '/generative/falling-ocean',
  },
  {
    name: 'Weather Patterns',
    link: '/generative/weather-patterns',
  },
]

const GenerativeWorks: React.FC = () => {
  const renderWorks = () => {
    return worksToDisplay.map((el, index) => {
      return (
        <div className="mb-4" key={index}>
          <Link href={el.link}>
            <a>
              <Button>{el.name}</Button>
            </a>
          </Link>
        </div>
      )
    })
  }

  return (
    <Layout title="Generative Works - Art by Paul Kirby">
      <Container>
        <H1>Generative Works</H1>
        {renderWorks()}
      </Container>
    </Layout>
  )
}

export default GenerativeWorks
