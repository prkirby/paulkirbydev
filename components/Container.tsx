import React from 'react'

export interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  className = '',
  children,
}) => <div className={`container mx-auto ${className}`}>{children}</div>
