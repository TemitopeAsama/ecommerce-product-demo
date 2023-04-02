import React from 'react'

type CTAButtonProps = {
  children: React.ReactNode,
  className: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CTAButton = ({children, className, handleClick}: CTAButtonProps) => {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default CTAButton