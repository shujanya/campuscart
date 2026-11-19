"use client";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";

export default function ProductDetails({ id }) {
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <EmptyState
        message="Product not found."
        linkHref="/products"
        linkText="Back to products"
      />
    );
  }

  const outOfStock = product.stock === 0;
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      <Link href="/products" className="text-sm text-blue-600 hover:underline">
        ← Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
<<<<<<< HEAD
          <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-8xl">
            {product.emoji}
          </div>
=======
        <div className="h-72 bg-gray-100 rounded-xl flex items-center justify-center text-8xl">
          {product.emoji}
        </div>
>>>>>>> 10eafc04975f7f9e40e08df8a63f110a3dfe5c88

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 flex-wrap">
            <Badge>{product.category}</Badge>
            {product.studentDeal && <Badge tone="deal">Student deal</Badge>}
            <Badge tone={outOfStock ? "warning" : "success"}>
              {outOfStock ? "Out of stock" : `${product.stock} in stock`}
            </Badge>
          </div>

          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">
            {product.description || "Available for quick pickup on campus."}
          </p>
          <p className="text-2xl font-bold">₹{product.price}</p>

          <div>
            <Button onClick={() => addToCart(product)} disabled={outOfStock}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">More in {product.category}</h2>
          <div className="flex flex-col gap-2">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                {p.name} · ₹{p.price}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}