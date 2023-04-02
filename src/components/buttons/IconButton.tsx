import React, { PropsWithChildren } from 'react'

type IconButtonProps = {
  ariaText: string,
  className: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({children, ariaText, handleClick, className}: PropsWithChildren<IconButtonProps>) => {
  return (
    <button className={className} onClick={handleClick} aria-labelledby="visually__hidden">
        {children}
        <span id="visually__hidden" hidden>{ariaText}</span>
    </button>
  )
}

export default IconButton