import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <nav className="navbar">
        <div className="logo">BeadifyByMandy</div>
        <div className="nav-links">
          <Link href="#home">Home</Link>
          <Link href="#shop">Shop</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="nav-actions">
          <button>Cart</button>
        </div>
      </nav>
        </>
    )
}
   