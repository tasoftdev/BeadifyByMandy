"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pink Crystal Bracelet",
    price: 7500,
    category: "Bracelets",
    image: "/images/category/products/pink-bracelet.jpg",
  },
  {
    id: 2,
    name: "Pearl Charm Bracelet",
    price: 8500,
    category: "Bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 3,
    name: "Golden Bead Bracelet",
    price: 9000,
    category: "Bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 4,
    name: "Pastel Dream Bracelet",
    price: 7000,
    category: "Bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 5,
    name: "Midnight Crystal Bracelet",
    price: 10000,
    category: "Bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 6,
    name: "Gold Beaded Necklace",
    price: 15000,
    category: "Necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 7,
    name: "Pearl Drop Necklace",
    price: 13500,
    category: "Necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 8,
    name: "Rose Crystal Necklace",
    price: 14000,
    category: "Necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 9,
    name: "Ocean Blue Necklace",
    price: 12500,
    category: "Necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 10,
    name: "Butterfly Charm Necklace",
    price: 16000,
    category: "Necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 11,
    name: "White Waist Beads",
    price: 6000,
    category: "Waist Beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 12,
    name: "Pink & Gold Waist Beads",
    price: 7500,
    category: "Waist Beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 13,
    name: "Crystal Waist Beads",
    price: 8000,
    category: "Waist Beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 14,
    name: "Sunset Waist Beads",
    price: 7000,
    category: "Waist Beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 15,
    name: "Pearl Anklet",
    price: 7000,
    category: "Anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 16,
    name: "Crystal Chain Anklet",
    price: 8500,
    category: "Anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 17,
    name: "Butterfly Anklet",
    price: 9000,
    category: "Anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 18,
    name: "Beaded Jewelry Set",
    price: 20000,
    category: "Jewelry Sets",
    image: "/images/jewelry-sets.jpg",
  },
  {
    id: 19,
    name: "Pearl Princess Set",
    price: 25000,
    category: "Jewelry Sets",
    image: "/images/jewelry-sets.jpg",
  },
  {
    id: 20,
    name: "Midnight Glam Set",
    price: 22500,
    category: "Jewelry Sets",
    image: "/images/jewelry-sets.jpg",
  },
];

const CATEGORIES = [
  "Bracelets",
  "Necklaces",
  "Waist Beads",
  "Anklets",
  "Jewelry Sets",
];

export default function Collection() {
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
    <main className="collection-page">
      <section className="collection-hero">
        <p>OUR FULL COLLECTION</p>

        <h1>More Beautiful Beads</h1>

        <span>
          Explore more of our handmade bead designs.
        </span>

        <Link href="/cart" className="collection-cart-button">
          View Cart {cartCount > 0 && `(${cartCount})`}
        </Link>
      </section>

      <section className="collection-products">
        {CATEGORIES.map((category) => (
          <div className="product-category" key={category}>
            <div className="product-category-header">
              <h2>{category}</h2>
            </div>

            <div className="product-grid">
              {PRODUCTS
                .filter(
                  (product) => product.category === category
                )
                .map((product) => (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                      />
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
          </div>
        ))}
      </section>
    </main>
  );
}