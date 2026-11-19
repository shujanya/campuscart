import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import Navbar from "@/components/Navbar";

export const metadata = { title: "CampusCart" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <OrderProvider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}