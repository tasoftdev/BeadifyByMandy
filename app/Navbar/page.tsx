"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/cartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link
        href="/"
        className="logo"
        onClick={closeMenu}
      >
        BeadifyByMandy
      </Link>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link href="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          href="/cart"
          className="mobile-cart"
          onClick={closeMenu}
        >
          🛒 Cart ({cartCount})
        </Link>
      </div>

      <div className="nav-actions">
        <Link href="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </div>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}