'use client'
import Link from "next/link";

import { useState } from "react";
import { Product, products } from "../product-data";

export default function ShoppingCartList({initialCartProducts}: {initialCartProducts: Product[]}) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);
     
     async function removeFromCart(productId: string) {
    const res = await fetch("http://localhost:3000/api/users/1/cart", {
      method: "DELETE",
      body: JSON.stringify({ productId }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedCartProducts = await res.json();
    setCartProducts(updatedCartProducts);
  }

    return(
        <>
        <h1>Shopping Cart</h1>
        {cartProducts.map(product => (
            <Link key={product.id} href={"/products/" + product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div className="flex justify-end" >
                <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(product.id);
              }}
            >
              Remove from Cart
            </button>
            </div>
            </Link>
        ))}

        </>
    ) 
}