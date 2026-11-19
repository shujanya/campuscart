"use client";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

const initialOrders = [
  {
    id: "ORD-1001",
    date: "25 Oct 2026",
    location: "Hostel A",
    slot: "12:30 - 1:00 PM",
    status: "Delivered",
    items: [
      { name: "Maggi Cup Noodles", qty: 2, price: 40 },
      { name: "Cold Coffee Can", qty: 1, price: 60 },
    ],
    total: 140,
  },
  {
    id: "ORD-1002",
    date: "27 Oct 2026",
    location: "Library",
    slot: "3:30 - 3:45 PM",
    status: "Delivered",
    items: [{ name: "Gel Pen (Pack of 5)", qty: 1, price: 50 }],
    total: 50,
  },
];

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(initialOrders);

  const addOrder = ({ items, location, slot, total }) => {
    const newOrder = {
      id: `ORD-${1001 + orders.length}`,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      location,
      slot,
      status: "Preparing",
      items: items.map(({ product, qty }) => ({
        name: product.name,
        qty,
        price: product.price,
      })),
      total,
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}