"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";
import { locations, slots } from "@/data/campus";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import EmptyState from "@/components/EmptyState";

export default function CartPage() {
  const { items, updateQty, removeFromCart, clearCart, total } = useCart();
  const { addOrder } = useOrders();
  const [location, setLocation] = useState("");
  const [slot, setSlot] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <EmptyState
        message="Order placed! Pick it up at your selected slot."
        linkHref="/orders"
        linkText="View your orders"
      />
    );
  }

  if (items.length === 0) {
    return (
      <EmptyState
        message="Your cart is empty."
        linkHref="/products"
        linkText="Browse products"
      />
    );
  }

  const canOrder = location && slot;

  const confirmOrder = () => {
    addOrder({ items, location, slot, total });
    clearCart();
    setShowModal(false);
    setPlaced(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-3">
        {items.map(({ product, qty }) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-500">₹{product.price} each</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQty(product.id, Math.max(1, qty - 1))}
                className="w-8 h-8 border rounded-lg"
              >
                -
              </button>
              <span>{qty}</span>
              <button
                onClick={() => updateQty(product.id, Math.min(product.stock, qty + 1))}
                className="w-8 h-8 border rounded-lg"
              >
                +
              </button>
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
        >
          <option value="">Select delivery location</option>
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>

        <select
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
        >
          <option value="">Select pickup slot</option>
          {slots.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between mt-6">
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <Button disabled={!canOrder} onClick={() => setShowModal(true)}>
          Place order
        </Button>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} title="Confirm your order">
        <p className="mb-1">Location: <strong>{location}</strong></p>
        <p className="mb-1">Slot: <strong>{slot}</strong></p>
        <p className="mb-4">Total: <strong>₹{total}</strong></p>
        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button onClick={confirmOrder}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}