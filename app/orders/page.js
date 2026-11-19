"use client";
import { useOrders } from "@/context/OrderContext";
import Badge from "@/components/Badge";
import EmptyState from "@/components/EmptyState";

export default function OrdersPage() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <EmptyState
        message="No orders yet."
        linkHref="/products"
        linkText="Start shopping"
      />
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <Badge tone={order.status === "Delivered" ? "success" : "warning"}>
                {order.status}
              </Badge>
            </div>

            <ul className="text-sm text-gray-700 mb-2">
              {order.items.map((item) => (
                <li key={item.name}>
                  {item.name} × {item.qty}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-500">
                {order.location} · {order.slot}
              </p>
              <p className="font-bold">₹{order.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}