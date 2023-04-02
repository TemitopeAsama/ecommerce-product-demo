import React from 'react'
import useCart from '@/src/context/cartContext'
import CartItem from './CartItem'
import CTAButton from '../buttons/CTAButton'
const Cart = () => {
  const { isInCart } = useCart()
  if(isInCart) {
        return (
          <div className='cart__container'>
            <div className="cart__header">
              Cart
            </div>
            <div className="cart__body">
                <CartItem/>
                <CTAButton className='checkout'>
                  Checkout
                </CTAButton>
            </div>
          </div>
        )
  }
  return (
    <div className='cart__container'>
      <div className="cart__header">
        Cart
      </div>
      <div className="empty__cart__body">
          Your Cart is Empty
      </div>
    </div>
  )
}

export default Cart