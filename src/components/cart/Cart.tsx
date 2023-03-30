import React from 'react'
import useCart from '@/src/context/cartContext'
import CartItem from './CartItem'
import CTAButton from '../buttons/CTAButton'
const Cart = () => {
  const { isInCart } = useCart()
  if(isInCart) {
        return (
          <>
          <div className="cart__header">
            Cart
          </div>
            <CartItem/>
            <CTAButton>
              Checkout
            </CTAButton>
          </>
        )
  }
  return (
    <div>
      <div className="cart__header">
        Cart
      </div>
      Your Cart is Empty
    </div>
  )
}

export default Cart