import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="section-label">BEADIFYBYMANDY</p>

        <h1>About BeadifyByMandy</h1>

        <p>
          Handmade bead accessories created with love,
          creativity, and you in mind.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <p className="section-label">OUR STORY</p>

          <h2>Made With Love, Made For You</h2>

          <p>
            BeadifyByMandy is a handmade bead brand created
            for people who love expressing themselves through
            beautiful and unique accessories.
          </p>

          <p>
            Every piece is carefully designed and handmade
            with attention to detail. From colourful bracelets
            and elegant necklaces to waist beads, anklets,
            rings, and phone charms, we create pieces that
            complement your personality and everyday style.
          </p>

          <p>
            We believe accessories are more than something you
            wear. They can express your personality, celebrate
            special moments, and add the perfect finishing
            touch to any outfit.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div>
          <p className="section-label">WHAT WE BELIEVE</p>

          <h2>Our Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>

              <p>
                We carefully select our materials and pay
                attention to every detail when creating each
                piece.
              </p>
            </div>

            <div className="value-card">
              <h3>Uniqueness</h3>

              <p>
                Every design is created to give you something
                beautiful and special that reflects your
                individual style.
              </p>
            </div>

            <div className="value-card">
              <h3>Creativity</h3>

              <p>
                We love experimenting with colours, beads,
                patterns, and designs to create pieces that
                stand out.
              </p>
            </div>

            <div className="value-card">
              <h3>Customer Love</h3>

              <p>
                Our customers inspire what we create, and we
                aim to make every BeadifyByMandy experience
                special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-collection">
        <p className="section-label">OUR COLLECTION</p>

        <h2>Something Beautiful For Everyone</h2>

        <p>
          Whether you are looking for an everyday accessory,
          a special gift, or something to complete your outfit,
          there is a BeadifyByMandy piece waiting for you.
        </p>

        <Link href="/shop" className="about-button">
          Shop Here
        </Link>
      </section>
    </main>
  );
}