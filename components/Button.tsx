import React from 'react'

export const Button: React.FC = ({ children }) => (
  <button className="border-purple-500 border-2 rounded-sm text-lg font-bold px-16 py-4">
    {children}
  </button>
)
