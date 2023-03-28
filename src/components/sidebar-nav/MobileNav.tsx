import React from 'react'
import IconButton from '../buttons/IconButton'
import { ToggleMenuProps } from '../header/Header'

const MobileNav = ({setOpenMenu}: ToggleMenuProps) => {

  const handleMenuClose = (e: React.MouseEvent<HTMLElement>) => {
      setOpenMenu(false)
  }
  
  return (
    <div>
      <IconButton ariaText='Close Menu' handleClick={handleMenuClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
      </IconButton>
      <nav>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav