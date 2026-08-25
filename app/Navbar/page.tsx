import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BeadifyByMandy</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

     <div className="nav-actions">
  <Link href="/cart">🛒 Cart</Link>
</div>
    </nav>
  );
}
