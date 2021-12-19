import React from 'react'
import { Layout } from '@components/Layout'
import dynamic from 'next/dynamic'
const FallingOceanComponent = dynamic(
  () => import('@prkirby/pts-sandbox').then((mod) => mod.FallingOcean),
  { ssr: false }
)

const FallingOcean: React.FC = () => (
  <Layout title="Falling Ocean - A ptsJS sketch by Paul Kirby">
    <FallingOceanComponent />
  </Layout>
)

export default FallingOcean
