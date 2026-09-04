"use client";

import Link from "next/link";
import Navbar from "./navbar/page";
import About from "./about/page";
import Contact from "./contact/page";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Pearl Bracelet",
    price: 8000,
    image: "/images/Products/pearl-bracelet.jpg",
    category: "Bracelets",
  },
  {
    id: 2,
    name: "Beaded Necklace",
    price: 12000,
    image: "/images/Products/beaded-necklace.jpg",
    category: "Necklaces",
  },
  {
    id: 3,
    name: "Waist Beads",
    price: 5000,
    image: "/images/Products/waist-beads.jpg",
    category: "Waist Beads",
  },
  {
    id: 4,
    name: "Crystal Anklet",
    price: 6500,
    image: "/images/Products/crystal-anklet.jpg",
    category: "Anklets",
  },
];

const CATEGORIES = [
  {
    id: "bracelets",
    title: "Bracelets",
    description: "Elegant pieces for everyday wear",
    image: "/images/Category/bracelet.jpg",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    description: "Beautiful beads to complete your look",
    image: "/images/Category/necklace.jpg",
  },
  {
    id: "waist-beads",
    title: "Waist Beads",
    description: "Handmade pieces made for you",
    image: "/images/Category/waist-bead.jpg",
  },
  {
    id: "anklets",
    title: "Anklets",
    description: "Simple details that make a statement",
    image: "/images/anklets.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-small-text">
              WELCOME TO BEADIFYBYMANDY
            </p>

            <h1>
              Beads Made
              <br />
              With Love.
            </h1>

            <p className="hero-description">
              BeadifyByMandy creates beautiful handmade bead accessories
              designed to add a touch of elegance, colour and personality
              to your everyday style.
            </p>

            <Link href="/shop" className="hero-button">
              Explore Our Collection
            </Link>
          </div>
        </section>

        <section className="featured-products">
          <div className="section-heading">
            <p>OUR FAVOURITES</p>
            <h2>Featured Products</h2>
            <p>
              Discover some of our favourite handmade pieces.
            </p>
          </div>

          <div className="product-grid">
            {FEATURED_PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/shop/product/${product.id}`}
                className="product-card"
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <span>
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-button">
            <Link href="/shop">
              View All Products
            </Link>
          </div>
        </section>

        <section className="categories">
          <div className="section-heading">
            <p>SHOP BY STYLE</p>
            <h2>Our Categories</h2>
            <p>
              Find the perfect piece for your style.
            </p>
          </div>

          <div className="category-grid">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/shop/${category.id}`}
                className="category-card"
              >
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.title}
                  />
                </div>

                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>BeadifyByMandy</h2>
            <p>Beautiful handmade beads, made with love.</p>
          </div>

          <nav
            className="footer-links"
            aria-label="Footer Navigation"
          >
            <h3>Quick Links</h3>

            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <a
              href="https://instagram.com/beadifybymandy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @beadifybymandy
            </a>

            <a
              href="https://tiktok.com/@beadifybymandy"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok: @beadifybymandy
            </a>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} BeadifyByMandy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}