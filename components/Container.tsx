import React from 'react'

export interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  className = '',
  children,
}) => <div className={`container p-4 mx-auto ${className}`}>{children}</div>
