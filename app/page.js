import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function LandingPage() {
  const deals = products.filter((p) => p.studentDeal).slice(0, 4);

  return (
    <div>
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Campus essentials, between classes.
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Order snacks, stationery and daily needs from the campus store and pick
          them up at your hostel, library or department.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Start shopping
        </Link>
      </section>

      <section className="grid sm:grid-cols-3 gap-4 mb-12">
        {[
          { title: "Pick your spot", text: "Hostel, library, CS block or canteen." },
          { title: "Pick your slot", text: "Choose a pickup window between classes." },
          { title: "Student deals", text: "Budget items under ₹50 and exam-week bundles." },
        ].map((f) => (
          <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.text}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Student deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}