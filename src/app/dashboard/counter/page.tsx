import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Shopping cart counter'
}

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <span>Products in the cart</span>

      <CartCounter value={20}/>
      
    </div>
  )
}