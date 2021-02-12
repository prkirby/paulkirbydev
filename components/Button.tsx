import React, { useState } from 'react'
import { COLORS } from '../constants'

import dynamic from 'next/dynamic'

const GravityMesh = dynamic(
  () => import('@prkirby/pts-sandbox').then((mod) => mod.GravityMesh),
  { ssr: false }
)

export const Button: React.FC = ({ children }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      className="relative text-purple-600 hover:text-purple-700 w-full max-w-xs"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: 'none' }}
    >
      <div className="absolute inset-0">
        <GravityMesh
          color={hover ? COLORS.GRAY_300 : COLORS.GRAY_200}
          shape="square"
          size={3}
          spacing={10}
          gravity={2.2}
          gravityRadius={50}
        />
      </div>
      <div className="border-purple-500 border-2 rounded-sm text-lg font-bold px-16 py-4 relative pointer-events-none">
        {children}
      </div>
    </button>
  )
}
