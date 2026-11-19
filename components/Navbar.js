"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { count } = useCart();

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          CampusCart
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/orders" className="hover:text-blue-600">Orders</Link>
          <Link href="/cart" className="relative hover:text-blue-600">
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-1.5">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}