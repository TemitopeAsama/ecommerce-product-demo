import React, { useState } from 'react'
import useCart from '@/src/context/cartContext'
import IconButton from '../buttons/IconButton'

const ProductItemCounter = () => {
  const { decreaseCount, increaseCount, itemCount } = useCart()
  // const [itemCount, setItemCount] = useState<number>(0)
  // const increaseCount = (e: React.MouseEvent<HTMLElement>) => {
  //   return setItemCount((itemCount) => itemCount + 1)
  // }
  // const decreaseCount = (e: React.MouseEvent<HTMLElement>) => {
  //   return itemCount > 0 && setItemCount((itemCount) => itemCount - 1)
  // }
  return (
    <div className='product__count'>
        <IconButton ariaText='Decrease Item Count By 1' handleClick={decreaseCount} className="add__product">
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a"/></svg>
        </IconButton>
        <span className="count">{itemCount}</span>
        <IconButton ariaText='Increase Item Count By 1' handleClick={increaseCount} className="remove__product">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b"/></svg>
        </IconButton>
    </div>
  )
}

export default ProductItemCounter

