import React, { useState } from 'react'
import Image from 'next/image'
import useWindowResize from '@/src/lib/useWindowResize'
import DesktopNav from '../header-nav/DesktopNav'
import IconButton from '../buttons/IconButton'

export type ToggleMenuProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setOpenMenu}: ToggleMenuProps) => {
  const { innerWidth } = useWindowResize()
  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(true)
  }

  if (innerWidth! > 768) {
    return (
      <header>
        <div className="right">
          <h2 className="logo">sneakers</h2>
          <DesktopNav />
        </div>

        <div className="left">
          <IconButton ariaText="View Cart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
          </IconButton>
          <Image src="/images/image-avatar.png" alt="profile-image" width={20} height={20}/>
        </div>
    </header>
    )
  }

  return (
      <header>
        <div className="right">
          <IconButton ariaText="Menu" handleClick={handleMenuOpen}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
          </IconButton>
          <h2 className="logo">sneakers</h2>
        </div>

        <div className="left">
          <IconButton ariaText="View Cart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
          </IconButton>
          <Image src="/images/image-avatar.png" alt="profile-image" width={20} height={20}/>
        </div>
      </header>

    )
}

export default Header

