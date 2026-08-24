"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Navbar from './Navbar/page';
import About from './About/page';
import Shop from './Shop/page';
import Contact from './Contact/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-small-text">WELCOME TO BEADIFYBYMANDY</p>

            <h1>
              Beads Made
              <br />
              With Love.
            </h1>

            <p className="hero-description">
              BeadifyByMandy creates beautiful handmade bead accessories
              designed to add a touch of elegance, colour and personality to
              your everyday style.
            </p>

            <a href="/shop" className="hero-button">
              Explore Our Collection
            </a>
          </div>
        </section>

        <section className="brand-intro">
          <p>HANDMADE • UNIQUE • BEAUTIFUL</p>

          <h2>Something Special, Just For You.</h2>

          <p>
            From carefully crafted bracelets and necklaces to unique custom
            pieces, every BeadifyByMandy creation is made with attention to
            detail and a passion for beautiful things.
          </p>
        </section>
      </main>
      <Shop />
      <About />
      <Contact />
      
      
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
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
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
        © {new Date().getFullYear()} BeadifyByMandy. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </>
  );
}