import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [bag, setBag] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToBag = (product) => {
    setBag((current) => [...current, product])
  }

  const removeFromBag = (index) => {
    setBag((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    )
  }

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id)

      if (exists) {
        return current.filter((item) => item.id !== product.id)
      }

      return [...current, product]
    })
  }

  const bagCount = bag.length
  const wishlistCount = wishlist.length

  return (
    <CartContext.Provider
      value={{
        bag,
        bagCount,
        addToBag,
        removeFromBag,

        wishlist,
        wishlistCount,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}