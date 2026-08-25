"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

const CATEGORIES = [
  {
    id: "bracelets",
    title: "Bracelets",
    description: "Elegant pieces for everyday wear",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    description: "Beautiful beads to complete your looks",
  },
  {
    id: "waist-beads",
    title: "Waist Beads",
    description: "Handmade pieces made for you",
  },
  {
    id: "anklets",
    title: "Anklets",
    description: "Simple details that make a statement",
  },
  {
    id: "rings",
    title: "Beaded Rings",
    description: "Delicate pieces to complete your style",
  },
  {
    id: "phone-charms",
    title: "Phone Charms",
    description: "Cute handmade charms for your everyday essentials",
  },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pearl Bracelet",
    price: 8000,
  },
  {
    id: 2,
    name: "Beaded Necklace",
    price: 12000,
  },
  {
    id: 3,
    name: "Waist Beads",
    price: 5000,
  },
  {
    id: 4,
    name: "Crystal Anklet",
    price: 6500,
  },
  {
    id: 5,
    name: "Beaded Ring",
    price: 4500,
  },
  {
    id: 6,
    name: "Phone Charm",
    price: 3500,
  },
];

export default function Shop() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("beadify-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("beadify-cart");
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      let updatedCart: CartItem[];

      if (existingProduct) {
        updatedCart = currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "beadify-cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="shop-page">
      <section id="shop" className="featured-show">
        <div className="featured-products-content">
          <p className="section-label">OUR FAVORITES</p>

          <h2>Featured Collection</h2>

          <span>
            Discover some of our most loved bead pieces.
          </span>
        </div>

        <div className="product-grid">
          {FEATURED_PRODUCTS.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                Product Image
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p className="price">
                  ₦{product.price.toLocaleString()}
                </p>

                <button
                  type="button"
                  className="cart-add-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-actions">
          <Link
            href="/collection"
            className="featured-button"
          >
            View Collection
          </Link>

          <Link
            href="/cart"
            className="cart-link-button"
          >
            View Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      </section>

      <section className="shop-hero">
        <p className="section-label">BEADIFYBYMANDY</p>

        <h1>Shop Our Collection</h1>

        <p>
          Find something beautiful for every occasion.
        </p>
      </section>

      <section className="categories">
        <div className="categories-header">
          <h2>Shop By Category</h2>

          <p>
            Explore our handmade bead collections and find
            something perfect for you.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((category) => (
            <Link
              href={`/shop/${category.id}`}
              key={category.id}
              className="category-card"
            >
              <div className="category-image">
                <h2>{category.title}</h2>

                <p>{category.description}</p>

                <span>Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
