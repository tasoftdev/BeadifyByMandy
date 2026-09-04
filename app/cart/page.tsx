"use client";

import Link from "next/link";
import { useCart } from "../context/cartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p className="section-label">
          YOUR SHOPPING BAG
        </p>

        <h1>Your Cart</h1>

        {cart.length > 0 && (
          <p>
            {cartCount}{" "}
            {cartCount === 1 ? "item" : "items"} in your cart
          </p>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛍️
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Add some beautiful bead pieces to your cart.
          </p>

          <Link
            href="/shop"
            className="cart-button"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <div className="cart-item-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  ) : (
                    <span>BeadifyByMandy</span>
                  )}
                </div>

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p className="cart-item-price">
                    ₦{item.price.toLocaleString()}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="item-total">
                    ₦
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </p>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>

              <strong>{cartCount}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                ₦{cartTotal.toLocaleString()}
              </strong>
            </div>

            <div className="summary-total">
              <span>Total</span>

              <strong>
                ₦{cartTotal.toLocaleString()}
              </strong>
            </div>

           <Link href="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
            <Link
              href="/shop"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}