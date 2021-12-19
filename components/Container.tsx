import React from 'react'

export interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  className = '',
  children,
}) => (
  <div
    className={`container p-4 mx-auto flex flex-col flex-wrap content-center justify-center min-h-full ${className}`}
  >
    {children}
  </div>
)
