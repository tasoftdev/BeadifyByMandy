"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cartContext";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    instructions: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const deliveryFee = cartTotal > 0 ? 2500 : 0;
  const grandTotal = cartTotal + deliveryFee;

  useEffect(() => {
    if (cart.length === 0 && !success) {
      router.replace("/shop");
    }
  }, [cart.length, router, success]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSuccess(false);

    const orderReference = `#BMD-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

    const order = {
      reference: orderReference,
      customer: {
        name: form.fullName,
        email: form.email,
        phone: form.phone,
      },
      delivery: {
        address: form.address,
        city: form.city,
        state: form.state,
        instructions: form.instructions,
      },
      products: cart,
      subtotal: cartTotal,
      deliveryFee,
      total: grandTotal,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const responseText = await response.text();

      let data: { error?: string; success?: boolean };

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("API returned:", responseText);

        throw new Error(
          "The order server returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to place your order."
        );
      }

      setSuccess(true);

      sessionStorage.setItem(
        "beadify-last-order",
        JSON.stringify(order)
      );

      clearCart();
    } catch (error) {
      console.error("Order submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "We could not place your order right now. Please try again."
      );
    }
  };

  if (cart.length === 0 && !success) {
    return null;
  }

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <p className="section-label">
          BEADIFYBYMANDY
        </p>

        <h1>Checkout</h1>

        <p>
          Complete your details to place your order.
        </p>
      </section>

      <div className="checkout-container">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <section className="checkout-section">
            <h2>Customer Information</h2>

            <div className="checkout-fields">
              <div className="checkout-field full-width">
                <label htmlFor="fullName">
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="email">
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="phone">
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  required
                />
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <h2>Delivery Information</h2>

            <div className="checkout-fields">
              <div className="checkout-field full-width">
                <label htmlFor="address">
                  Delivery Address *
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your full delivery address"
                  rows={3}
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="city">
                  City *
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="state">
                  State *
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                  required
                />
              </div>

              <div className="checkout-field full-width">
                <label htmlFor="instructions">
                  Delivery Instructions
                </label>

                <textarea
                  id="instructions"
                  name="instructions"
                  value={form.instructions}
                  onChange={handleChange}
                  placeholder="Optional delivery instructions"
                  rows={3}
                />
              </div>
            </div>
          </section>

          {error && (
            <p className="checkout-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
          </button>
        </form>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-products">
            {cart.map((item) => (
              <div
                className="summary-product"
                key={item.id}
              >
                <div className="summary-product-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  ) : (
                    <span>BeadifyByMandy</span>
                  )}
                </div>

                <div className="summary-product-info">
                  <h3>{item.name}</h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <span>
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>
              ₦{cartTotal.toLocaleString()}
            </strong>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>

            <strong>
              ₦{deliveryFee.toLocaleString()}
            </strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ₦{grandTotal.toLocaleString()}
            </strong>
          </div>

          <Link
            href="/shop"
            className="back-to-shop"
          >
            ← Continue Shopping
          </Link>
        </aside>
      </div>

      {success && (
        <div className="checkout-success-overlay">
          <div className="checkout-success-popup">
            <div className="checkout-success-icon">
              ✓
            </div>

            <h2>Order placed successfully! 🎉</h2>

            <p>
              Thank you for your order. We’ll contact you shortly
              to confirm your order and payment.
            </p>

            <div className="whatsapp-hint">
              <p>
                Need help with your order? Chat with us on WhatsApp.
              </p>

              <a
                href="https://wa.me/2349163865424"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Chat on WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="checkout-success-button"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </main>
  );
}