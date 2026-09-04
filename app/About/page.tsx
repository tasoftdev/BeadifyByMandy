import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="about-preview">
      <div className="about-image">
        <div className="about-placeholder">
          BeadifyByMandy
        </div>
      </div>

      <div className="about-content">
        <span className="section-label">
          ABOUT BEADIFYBYMANDY
        </span>

        <h2 className="section-title">
          Made With Love, Just For You.
        </h2>

        <p className="section-description">
          Welcome to BeadifyByMandy, where creativity meets
          craftsmanship. We create beautiful handmade bead
          accessories designed to bring colour, elegance and
          personality to your everyday style.
        </p>

        <p>
          Every piece is carefully crafted with attention to
          detail, from simple everyday designs to special
          pieces made for memorable occasions.
        </p>

        <Link href="/about/more-info" className="about-button">
          Learn More
        </Link>
      </div>
    </section>
  );
}