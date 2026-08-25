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
        <span className="section-label">About BeadifyByMandy</span>

        <h2 className="section-title">
          Welcome to BeadifyByMandy!
        </h2>

        <p className="section-description">
          At BeadifyByMandy, we create beautiful handmade bead designs
          created to add a personal touch to every outfit and occasion.
        </p>

        <p>
          From everyday pieces to special occasions, every design is
          carefully made with you in mind.
        </p>

        <Link href="/about" className="about-button">
          Learn More
        </Link>
      </div>
    </section>
  );
}
