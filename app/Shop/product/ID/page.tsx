"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/cartContext";

const products = [
  {
    id: 1,
    name: "Pearl Bracelet",
    image: "/images/Products/pearl-bracelet.jpg",
    price: 8000,
    category: "Bracelets",
    description:
      "A beautiful handmade pearl bracelet designed to add a touch of elegance to your everyday look.",
    stock: 10,
  },
  {
    id: 2,
    name: "Beaded Necklace",
    image: "/images/Products/beaded-necklace.jpg",
    price: 12000,
    category: "Necklaces",
    description:
      "A stylish handmade beaded necklace that adds a beautiful finishing touch to any outfit.",
    stock: 10,
  },
  {
    id: 3,
    name: "Waist Beads",
    image: "/images/Products/waist-beads.jpg",
    price: 5000,
    category: "Waist Beads",
    description:
      "Beautiful handmade waist beads designed to add elegance and personality to your style.",
    stock: 15,
  },
  {
    id: 4,
    name: "Crystal Anklet",
    image: "/images/Products/crystal-anklet.jpg",
    price: 6500,
    category: "Anklets",
    description:
      "A delicate crystal anklet made to add a subtle sparkle and beautiful detail to your look.",
    stock: 8,
  },
  {
    id: 5,
    name: "Beaded Ring",
    image: "/images/Products/beaded-ring.jpg",
    price: 4500,
    category: "Beaded Rings",
    description:
      "A delicate handmade beaded ring that is perfect for adding a simple and stylish touch to your outfit.",
    stock: 12,
  },
  {
    id: 6,
    name: "Phone Charm",
    image: "/images/Products/phone-charm.jpg",
    price: 3500,
    category: "Phone Charms",
    description:
      "A cute handmade phone charm designed to personalize your phone and make it uniquely yours.",
    stock: 20,
  },
];

export default function ProductDetailsPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const productId = Number(params.id);

  const product = products.find(
    (item) => item.id === productId
  );

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="product-not-found">
          <h1>Product Not Found</h1>

          <p>
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link href="/shop" className="back-to-shop">
            ← Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(product.stock, current + 1)
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-content">
          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            ₦{product.price.toLocaleString()}
          </p>

          <div className="product-details-divider" />

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="product-stock">
            <span>Available Stock</span>

            <strong>
              {product.stock} available
            </strong>
          </div>

          <div className="product-quantity">
            <span>Quantity</span>

            <div className="quantity-selector">
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                disabled={quantity === product.stock}
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`product-add-button ${
              added ? "added" : ""
            }`}
            onClick={handleAddToCart}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>

          <Link
            href="/shop"
            className="back-to-shop"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}