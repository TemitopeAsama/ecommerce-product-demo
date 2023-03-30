import * as React from 'react'
import { StaticImageData } from 'next/image'
import imgOne from '../../public/images/image-product-1.jpg'
import imgTwo from '../../public/images/image-product-2.jpg'
import imgThree from '../../public/images/image-product-3.jpg'
import imgFour from '../../public/images/image-product-4.jpg'

type ChildrenProps = { children: React.ReactNode }
type initialValue = {
    openMenu: boolean,
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
    itemCount: number,
    setItemCount: React.Dispatch<React.SetStateAction<number>>,
    cartItemCount: number,
    setCartItemCount: React.Dispatch<React.SetStateAction<number>>,
    addToCart: boolean,
    setAddToCart: React.Dispatch<React.SetStateAction<boolean>>,
    isInCart: boolean,
    setIsInCart: React.Dispatch<React.SetStateAction<boolean>>,
    increaseCount: (e: React.MouseEvent<HTMLElement>) => void,
    decreaseCount: (e: React.MouseEvent<HTMLElement>) => false | void,
    carouselItems: {
        key: number,
        image: StaticImageData
    }[],
}
const CartContext = React.createContext<null | initialValue>(null)

const CartProvider = ({children}: ChildrenProps) => {
    const [addToCart, setAddToCart] = React.useState(false)
    const [isInCart, setIsInCart] = React.useState(false)
    const [openMenu, setOpenMenu] = React.useState<boolean>(false)
    const [itemCount, setItemCount] = React.useState<number>(0)
    const [cartItemCount, setCartItemCount] = React.useState<number>(0)
    const increaseCount = (e: React.MouseEvent<HTMLElement>) => {
    return setItemCount((itemCount) => itemCount + 1)
    }
    const decreaseCount = (e: React.MouseEvent<HTMLElement>) => {
        return itemCount > 0 && setItemCount((itemCount) => itemCount - 1)
    }
    const carouselItems = [
        {
            image: imgOne,
            key: 1
        },
        {
            image: imgTwo,
            key: 2
        },
        {
            image: imgThree,
            key: 3
        },
        {
            image: imgFour,
            key: 4
        }
    ]

    const value = {
        openMenu,
        setOpenMenu,
        itemCount,
        setItemCount,
        cartItemCount,
        setCartItemCount,
        addToCart,
        setAddToCart,
        isInCart,
        setIsInCart,
        increaseCount,
        decreaseCount,
        carouselItems
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }

// useCart custom hook
const useCart = () => {
    const context = React.useContext(CartContext)!

    if (context === undefined) {
        throw new Error("useCart can only be used within CartContext");
    }

    return context
}

export default useCart