
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="section-label">WELCOME TO BEADIFYBYMANDY</p>

        <h1>Beautiful Beads, Meaningful Style</h1>

        <p>
          Handmade bead accessories created with love, creativity,
          and attention to detail. At BeadifyByMandy, we believe
          that the little things you wear can make a beautiful
          difference in how you express yourself.
        </p>

        <p>
          From elegant bracelets and necklaces to colourful waist
          beads, anklets, rings, and phone charms, our collections
          are designed to help you celebrate your individuality
          and make every style uniquely yours.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <p className="section-label">OUR STORY</p>

          <h2>Made With Love, Made For You</h2>

          <p>
            BeadifyByMandy is a handmade bead brand built around
            creativity, self-expression, and the beauty of carefully
            crafted accessories. We create pieces for people who
            appreciate the charm of handmade designs and enjoy
            expressing their personalities through what they wear.
          </p>

          <p>
            Our journey is inspired by the idea that accessories
            should be more than just additions to an outfit. They
            should tell a story, reflect your taste, and help you
            feel confident in your own style. That is why we pay
            attention to the colours, patterns, combinations, and
            finishing details that make each design special.
          </p>

          <p>
            Every BeadifyByMandy piece is thoughtfully designed and
            handmade with care. From simple everyday bracelets to
            elegant necklaces, beautiful waist beads, stylish anklets,
            rings, and creative phone charms, our collection offers
            different ways to add colour and personality to your look.
          </p>

          <p>
            We understand that everyone has a unique sense of style.
            Some people love soft, delicate designs, while others
            prefer bold colours and statement pieces. Our aim is to
            offer accessories that complement different preferences
            and occasions, whether you are dressing casually,
            preparing for a celebration, or searching for a thoughtful
            gift for someone special.
          </p>

          <p>
            At the heart of our brand is a love for creativity and
            the satisfaction of turning simple materials into
            beautiful accessories. We want every piece you choose
            to feel personal, meaningful, and worth wearing again
            and again.
          </p>

          <p>
            Thank you for being part of the BeadifyByMandy journey.
            Every visit, order, recommendation, and show of support
            encourages us to keep creating beautiful handmade
            accessories with love.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div>
          <p className="section-label">WHAT WE BELIEVE</p>

          <h2>Our Values</h2>

          <p className="about-values-intro">
            Our values guide how we approach every design and
            every customer experience. They reflect what matters
            to us as a handmade accessories brand.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>

              <p>
                We believe beautiful accessories begin with care.
                We pay attention to our materials, colour choices,
                finishing, and small details so every piece receives
                the attention it deserves.
              </p>
            </div>

            <div className="value-card">
              <h3>Uniqueness</h3>

              <p>
                Personal style should feel personal. We celebrate
                different tastes and preferences by creating designs
                that bring their own charm and give you more ways
                to express who you are.
              </p>
            </div>

            <div className="value-card">
              <h3>Creativity</h3>

              <p>
                Creativity inspires everything we make. We enjoy
                exploring different beads, colours, combinations,
                and patterns to bring fresh ideas to life and create
                accessories that complement your style.
              </p>
            </div>

            <div className="value-card">
              <h3>Customer Love</h3>

              <p>
                Our customers are an important part of our journey.
                We value your support, appreciate your interest in
                our work, and aim to make choosing and ordering
                your favourite pieces a pleasant experience.
              </p>
            </div>

            <div className="value-card">
              <h3>Self-Expression</h3>

              <p>
                We believe accessories can help tell your story.
                Whether your style is simple, colourful, elegant,
                playful, or bold, we want our pieces to help you
                express yourself with confidence.
              </p>
            </div>

            <div className="value-card">
              <h3>Thoughtful Gifting</h3>

              <p>
                Handmade accessories can be a lovely way to show
                someone you care. Our collections offer thoughtful
                options for birthdays, celebrations, special
                occasions, and little moments worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-collection">
        <p className="section-label">OUR COLLECTION</p>

        <h2>Something Beautiful For Everyone</h2>

        <p>
          Discover accessories that bring a special touch to your
          everyday wardrobe. Explore bracelets for effortless style,
          necklaces that complete your look, waist beads that reflect
          your personal taste, anklets for a delicate finishing touch,
          rings that add character, and phone charms that make your
          everyday essentials more personal.
        </p>

        <p>
          Whether you are choosing something for yourself, searching
          for a thoughtful gift, or looking for an accessory for a
          special occasion, we invite you to explore our collection
          and find a piece that feels right for you.
        </p>

        <Link href="/shop" className="about-button">
          Shop Our Collection
        </Link>
      </section>
    </main>
  );
}
