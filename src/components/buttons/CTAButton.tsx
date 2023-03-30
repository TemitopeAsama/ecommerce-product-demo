import React from 'react'

type CTAButtonProps = {
  children: React.ReactNode,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CTAButton = ({children, handleClick}: CTAButtonProps) => {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default CTAButton