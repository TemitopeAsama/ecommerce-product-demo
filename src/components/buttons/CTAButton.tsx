import React from 'react'

type CTAButtonProps = {
  children: React.ReactNode
}


const CTAButton = ({children}: CTAButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default CTAButton