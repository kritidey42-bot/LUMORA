import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-eyebrow">
            THE LUMORA EDIT
          </p>

          <h1>
            Essentials,
            <br />
            beautifully considered.
          </h1>

          <p className="hero-description">
            Thoughtfully selected pieces designed for
            modern living, everyday rituals and everything
            in between.
          </p>

          <Link to="/shop" className="hero-button">
            Explore Collection
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Home