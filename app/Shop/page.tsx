import Link from "next/link";

const CATEGORIES = [
  {
    id: "bracelets",
    title: "Bracelets",
    description: "Elegant pieces for everyday wear",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    description: "Beautiful beads to complete your looks",
  },
  {
    id: "waist-beads",
    title: "Waist Beads",
    description: "Handmade pieces made for you",
  },
  {
    id: "anklets",
    title: "Anklets",
    description: "Simple details that make a statement",
  },
  {
  id: "rings",
  title: "Beaded Rings",
  description: "Delicate pieces to complete your style",
},
{
  id: "phone-charms",
  title: "Phone Charms",
  description: "Cute handmade charms for your everyday essentials",
},
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Pearl Bracelet",
    price: "₦8,000",
  },
  {
    id: 2,
    name: "Beaded Necklace",
    price: "₦12,000",
  },
  {
    id: 3,
    name: "Waist Beads",
    price: "₦5,000",
  },
  {
    id: 4,
    name: "Crystal Anklet",
    price: "₦6,500",
  },
  {
  id: 5,
  name: "Beaded Ring",
  price: "₦4,500",
},
{
  id: 6,
  name: "Phone Charm",
  price: "₦3,500",
},

];

export default function Shop() {
  return (
    <main className="shop-page">
      <section className="featured-show">
        <div className="featured-products-content">
          <p className="section-label">OUR FAVORITES</p>

          <h2>Featured Collection</h2>

          <span>
            Discover some of our most loved bead pieces.
          </span>
        </div>

        <div className="product-grid">
          {FEATURED_PRODUCTS.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                Product Image
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/shop" className="featured-button">
          View Collection
        </Link>
      </section>

      <section className="shop-hero">
        <p className="section-label">BEADIFYBYMANDY</p>

        <h1>Shop Our Collection</h1>

        <p>
          Find something beautiful for every occasion.
        </p>
      </section>

      <section className="categories">
        <div className="categories-header">
          <h2>Shop By Category</h2>
          <p>
            Explore our handmade bead collections and find
            something perfect for you.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((category) => (
            <Link
              href={`/shop/${category.id}`}
              key={category.id}
              className="category-card"
            >
              <div className="category-image">
                <h2>{category.title}</h2>

                <p>{category.description}</p>

                <span>Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
