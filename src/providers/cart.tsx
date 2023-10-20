"use client"
import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number
}

interface ICardContext {
  products: CartProduct[]
  addProductToCart: (product: CartProduct) => void
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  
}

export const CartContext = createContext<ICardContext>({
  products:[],
  addProductToCart:()=>{},
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0

})

const CartProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  const addProductToCart = (product: CartProduct)=>{

    const productIsAlreadyOnCart = products.some(cartProduct => cartProduct.id === product.id)

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }

    setProducts(prev => [...prev, product])
  }

  return ( 
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0
      }}
    >
      {children}
    </CartContext.Provider>
   );
}
 
export default CartProvider;