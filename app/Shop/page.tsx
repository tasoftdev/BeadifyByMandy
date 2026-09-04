"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/cartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pearl Bracelet",
    image: "/images/Products/pearl-bracelet.jpg",
    price: 8000,
    category: "Bracelets",
  },
  {
    id: 2,
    name: "Beaded Necklace",
    image: "/images/Products/beaded-necklace.jpg",
    price: 12000,
    category: "Necklaces",
  },
  {
    id: 3,
    name: "Waist Beads",
    image: "/images/Products/waist-beads.jpg",
    price: 5000,
    category: "Waist Beads",
  },
  {
    id: 4,
    name: "Crystal Anklet",
    image: "/images/Products/crystal-anklet.jpg",
    price: 6500,
    category: "Anklets",
  },
  {
    id: 5,
    name: "Beaded Ring",
    image: "/images/Products/beaded-ring.jpg",
    price: 4500,
    category: "Beaded Rings",
  },
  {
    id: 6,
    name: "Phone Charm",
    image: "/images/Products/phone-charm.jpg",
    price: 3500,
    category: "Phone Charms",
  },
];

const FILTER_CATEGORIES = [
  "All",
  "Bracelets",
  "Necklaces",
  "Waist Beads",
  "Anklets",
  "Beaded Rings",
  "Phone Charms",
];

export default function Shop() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [addedProduct, setAddedProduct] = useState<
    number | null
  >(null);

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (product) =>
            product.category === selectedCategory
        );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct(null);
    }, 1200);
  };

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <p className="section-label">
          BEADIFYBYMANDY
        </p>

        <h1>Shop Our Collection</h1>

        <p>
          Discover our complete collection of handmade
          bead accessories.
        </p>
      </section>

      <section className="shop-products" id="shop">
        <div className="shop-products-header">
          <div>
            <p className="section-label">
              OUR COLLECTION
            </p>

            <h2>All Products</h2>

            <p>
              Browse our handmade pieces and find something
              beautiful for you.
            </p>
          </div>
        </div>

        <div className="category-filter">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-button ${
                selectedCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >
              <Link
                href={`/shop/product/${product.id}`}
                className="product-image-link"
              >
                <div className="product-image">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                  ) : (
                    <div className="product-image-placeholder">
                      <span>BeadifyByMandy</span>
                    </div>
                  )}
                </div>
              </Link>

              <div className="product-info">
                <p className="product-category">
                  {product.category}
                </p>

                <Link
                  href={`/shop/product/${product.id}`}
                  className="product-name-link"
                >
                  <h3 className="product-name">
                    {product.name}
                  </h3>
                </Link>

                <p className="price">
                  ₦{product.price.toLocaleString()}
                </p>

                <button
                  type="button"
                  className={`cart-add-button ${
                    addedProduct === product.id
                      ? "added"
                      : ""
                  }`}
                  onClick={() =>
                    handleAddToCart(product)
                  }
                >
                  {addedProduct === product.id
                    ? "Added to Cart ✓"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>

            <p>
              There are currently no products in this
              category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}