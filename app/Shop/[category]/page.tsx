"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
    id: 101,
    name: "Pink Crystal Bracelet",
    price: 7500,
    category: "bracelets",
    image: "/images/category/products/pink-bracelet.jpg",
  },
  {
    id: 102,
    name: "Pearl Charm Bracelet",
    price: 8500,
    category: "bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 103,
    name: "Golden Bead Bracelet",
    price: 9000,
    category: "bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 104,
    name: "Pastel Dream Bracelet",
    price: 7000,
    category: "bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 105,
    name: "Midnight Crystal Bracelet",
    price: 10000,
    category: "bracelets",
    image: "/images/Bracelet.jpg",
  },
  {
    id: 106,
    name: "Gold Beaded Necklace",
    price: 15000,
    category: "necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 107,
    name: "Pearl Drop Necklace",
    price: 13500,
    category: "necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 108,
    name: "Rose Crystal Necklace",
    price: 14000,
    category: "necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 109,
    name: "Ocean Blue Necklace",
    price: 12500,
    category: "necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 110,
    name: "Butterfly Charm Necklace",
    price: 16000,
    category: "necklaces",
    image: "/images/beaded-necklace.jpg",
  },
  {
    id: 111,
    name: "White Waist Beads",
    price: 6000,
    category: "waist-beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 112,
    name: "Pink & Gold Waist Beads",
    price: 7500,
    category: "waist-beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 113,
    name: "Crystal Waist Beads",
    price: 8000,
    category: "waist-beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 114,
    name: "Sunset Waist Beads",
    price: 7000,
    category: "waist-beads",
    image: "/images/waist-beads.jpg",
  },
  {
    id: 115,
    name: "Pearl Anklet",
    price: 7000,
    category: "anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 116,
    name: "Crystal Chain Anklet",
    price: 8500,
    category: "anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 117,
    name: "Butterfly Anklet",
    price: 9000,
    category: "anklets",
    image: "/images/anklets.jpg",
  },
  {
    id: 118,
    name: "Pearl Beaded Ring",
    price: 4500,
    category: "rings",
    image: "/images/rings.jpg",
  },
  {
    id: 119,
    name: "Pink Crystal Ring",
    price: 5000,
    category: "rings",
    image: "/images/rings.jpg",
  },
  {
    id: 120,
    name: "Golden Bead Ring",
    price: 5500,
    category: "rings",
    image: "/images/rings.jpg",
  },
  {
    id: 121,
    name: "Pastel Beaded Ring",
    price: 4000,
    category: "rings",
    image: "/images/rings.jpg",
  },
  {
    id: 122,
    name: "Pearl Phone Charm",
    price: 3500,
    category: "phone-charms",
    image: "/images/phone-charms.jpg",
  },
  {
    id: 123,
    name: "Butterfly Phone Charm",
    price: 4000,
    category: "phone-charms",
    image: "/images/phone-charms.jpg",
  },
  {
    id: 124,
    name: "Pink Crystal Phone Charm",
    price: 4000,
    category: "phone-charms",
    image: "/images/phone-charms.jpg",
  },
  {
    id: 125,
    name: "Colorful Beaded Phone Charm",
    price: 3500,
    category: "phone-charms",
    image: "/images/phone-charms.jpg",
  },
];

const CATEGORY_NAMES: Record<string, string> = {
  bracelets: "Bracelets",
  necklaces: "Necklaces",
  "waist-beads": "Waist Beads",
  anklets: "Anklets",
  rings: "Beaded Rings",
  "phone-charms": "Phone Charms",
};

export default function CategoryPage() {
  const params = useParams<{ category: string }>();
  const category = params.category;

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

      localStorage.setItem("beadify-cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const categoryProducts = PRODUCTS.filter(
    (product) => product.category === category
  );

  const categoryName = CATEGORY_NAMES[category];

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!categoryName) {
    return (
      <main className="shop-page">
        <section className="shop-hero">
          <p className="section-label">BEADIFYBYMANDY</p>

          <h1>Category Not Found</h1>

          <p>The category you are looking for does not exist.</p>

          <Link href="/shop" className="featured-button">
            Back to Shop
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <p className="section-label">BEADIFYBYMANDY</p>

        <h1>{categoryName}</h1>

        <p>
          Explore our beautiful handmade {categoryName.toLowerCase()}.
        </p>
      </section>

      <section className="featured-show">
        <div className="featured-products-content">
          <p className="section-label">OUR COLLECTION</p>

          <h2>{categoryName}</h2>

          <span>
            Handmade pieces carefully selected just for you.
          </span>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <div className="product-card" key={product.id}>
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
        ) : (
          <div>
            <p>No products available in this category.</p>
          </div>
        )}

        <div className="featured-actions">
          <Link href="/shop" className="featured-button">
            Back to Shop
          </Link>

          <Link href="/cart" className="cart-link-button">
            View Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      </section>
    </main>
  );
}