import React from 'react'

export const H1: React.FC = ({ children }) => (
  <h1 className="flex-none font-sans text-2xl md:text-3xl font-thin text-center pb-4">
    {children}
  </h1>
)
