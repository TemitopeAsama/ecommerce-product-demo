import type { AppProps } from 'next/app'
import { CartProvider } from '@/src/context/cartContext'
import '../src/styles/scss/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
