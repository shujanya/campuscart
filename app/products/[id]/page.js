import { products } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  return <ProductDetails id={id} />;
}