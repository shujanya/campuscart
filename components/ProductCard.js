"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Button from "./Button";
import Badge from "./Badge";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const outOfStock = product.stock === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
<<<<<<< HEAD
      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center text-8xl">
            {product.emoji}
        </div>
      </div>
=======
      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
        {product.emoji}
    </div>
>>>>>>> 10eafc04975f7f9e40e08df8a63f110a3dfe5c88

      <div className="flex gap-2 flex-wrap">
        <Badge>{product.category}</Badge>
        {product.studentDeal && <Badge tone="deal">Student deal</Badge>}
        {outOfStock && <Badge tone="warning">Out of stock</Badge>}
      </div>

      <Link href={`/products/${product.id}`} className="font-semibold hover:text-blue-600">
        {product.name}
      </Link>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold">₹{product.price}</span>
        <Button onClick={() => addToCart(product)} disabled={outOfStock}>
          Add
        </Button>
      </div>
    </div>
  );
}