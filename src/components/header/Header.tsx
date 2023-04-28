import React, { useState } from 'react'
import Image from 'next/image'
import MenuIcon from '../../../public/images/icon-menu.svg'
import CartIcon from '../../../public/images/icon-cart.svg'
import Cart from '../cart/Cart'
import useWindowResize from '@/src/lib/useWindowResize'
import useCart from '@/src/context/cartContext'
import DesktopNav from '../header-nav/DesktopNav'
import IconButton from '../buttons/IconButton'

export type ToggleMenuProps = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = () => {
  const { setOpenMenu, cartItemCount } = useCart()
  const { innerWidth } = useWindowResize()
  const [showCart, setShowCart] = useState(false)
  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(true)
  }
  const handleShowCart = (e: React.MouseEvent<HTMLElement>) => {
    showCart ? setShowCart(false) : setShowCart(true)
  }

  if (innerWidth! >= 768) {
    return (
      <header className='header__desktop'>
        <div className="left__desktop">
          <h2 className="logo">sneakers</h2>
          <DesktopNav />
        </div>

        <div className="right__desktop">
          <IconButton ariaText="View Cart" className='view__cart' handleClick={handleShowCart}>
            {cartItemCount ? <span>{cartItemCount}</span> : null}
            <Image src={CartIcon} alt='View Cart'/>
          </IconButton>
          <a href="#" aria-label='profile picture'>
            <Image src="/images/image-avatar.png" alt="profile-image" width={20} height={20}/>
          </a>
          {showCart && <Cart />}
        </div>
    </header>
    )
  }

  return (
      <header className='header__mobile'>
        <div className="left__mobile">
          <IconButton ariaText="Menu" handleClick={handleMenuOpen} className='hamburger'>
              <Image src={MenuIcon} alt='Hamburger'/>
          </IconButton>
          <h2 className="logo">sneakers</h2>
        </div>

        <div className="right__mobile">
          <IconButton ariaText="View Cart" className='view__cart' handleClick={handleShowCart}>
            {cartItemCount ? <span>{cartItemCount}</span> : null}
            <Image src={CartIcon} alt='View Cart'/>
          </IconButton>
          <a href="#" aria-label='profile picture'> <Image src="/images/image-avatar.png" alt="profile-image" width={50} height={50}/> </a>
          {showCart && <Cart />}
        </div>
      </header>
  );
}

export default Header


