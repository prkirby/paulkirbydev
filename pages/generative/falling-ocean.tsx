import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../../components/Layout'

export default function FallingOcean(): ReactElement {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { FallingOcean: FallingOceanSketch } = require('@prkirby/pts-sandbox')
    new FallingOceanSketch().run()
  }
  return <Layout title="Falling Ocean - A ptsJS sketch by Paul Kirby"></Layout>
}
