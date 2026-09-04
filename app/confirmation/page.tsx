"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type OrderProduct = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
  quantity: number;
};

type Order = {
  reference: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  delivery: {
    address: string;
    city: string;
    state: string;
    instructions: string;
  };
  products: OrderProduct[];
  subtotal: number;
  deliveryFee: number;
  total: number;
};

export default function OrderConfirmation() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem(
      "beadify-last-order"
    );

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch {
        sessionStorage.removeItem("beadify-last-order");
      }
    }
  }, []);

  if (!order) {
    return (
      <main className="confirmation-page">
        <div className="confirmation-empty">
          <h1>No Order Found</h1>
          <p>
            We could not find a recent order confirmation.
          </p>

          <Link
            href="/shop"
            className="confirmation-button"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="confirmation-page">
      <div className="confirmation-container">
        <section className="confirmation-header">
          <div className="success-icon">✓</div>

          <p className="section-label">
            ORDER CONFIRMED
          </p>

          <h1>Thank You, {order.customer.name}!</h1>

          <p className="confirmation-message">
            Your order has been received successfully.
            We’ll contact you using the phone number
            provided to confirm your order and delivery.
          </p>

          <div className="order-reference">
            <span>Order Reference</span>
            <strong>{order.reference}</strong>
          </div>
        </section>

        <div className="confirmation-content">
          <section className="confirmation-card">
            <h2>Order Summary</h2>

            <div className="confirmation-products">
              {order.products.map((product) => (
                <div
                  className="confirmation-product"
                  key={product.id}
                >
                  <div className="confirmation-product-image">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    ) : (
                      <span>BeadifyByMandy</span>
                    )}
                  </div>

                  <div className="confirmation-product-info">
                    <h3>{product.name}</h3>

                    <p>
                      Quantity: {product.quantity}
                    </p>

                    <p>
                      ₦{product.price.toLocaleString()} each
                    </p>
                  </div>

                  <strong>
                    ₦
                    {(
                      product.price * product.quantity
                    ).toLocaleString()}
                  </strong>
                </div>
              ))}
            </div>

            <div className="confirmation-totals">
              <div>
                <span>Subtotal</span>
                <strong>
                  ₦{order.subtotal.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>Delivery Fee</span>
                <strong>
                  ₦{order.deliveryFee.toLocaleString()}
                </strong>
              </div>

              <div className="confirmation-total">
                <span>Total</span>
                <strong>
                  ₦{order.total.toLocaleString()}
                </strong>
              </div>
            </div>
          </section>

          <section className="confirmation-card">
            <h2>Customer Information</h2>

            <div className="confirmation-details">
              <div>
                <span>Name</span>
                <strong>{order.customer.name}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{order.customer.email}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{order.customer.phone}</strong>
              </div>
            </div>
          </section>

          <section className="confirmation-card">
            <h2>Delivery Information</h2>

            <div className="confirmation-details">
              <div>
                <span>Address</span>
                <strong>{order.delivery.address}</strong>
              </div>

              <div>
                <span>City</span>
                <strong>{order.delivery.city}</strong>
              </div>

              <div>
                <span>State</span>
                <strong>{order.delivery.state}</strong>
              </div>

              {order.delivery.instructions && (
                <div>
                  <span>Delivery Instructions</span>
                  <strong>
                    {order.delivery.instructions}
                  </strong>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="confirmation-actions">
          <Link
            href="/shop"
            className="confirmation-button primary"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="confirmation-button secondary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}