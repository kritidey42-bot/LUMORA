function Collections() {
  return (
    <main className="collections-page">

      <section className="collections-header">
        <p>CURATED FOR YOU</p>

        <h1>Collections.</h1>

        <span>
          Explore thoughtfully curated edits designed for modern living.
        </span>
      </section>

      <section className="collection-grid">

        <article className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
            alt="Apparel collection"
          />

          <div>
            <p>01</p>
            <h2>Everyday Apparel</h2>
            <span>Refined pieces for everyday moments.</span>
          </div>
        </article>

        <article className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=1200&q=85"
            alt="Accessories collection"
          />

          <div>
            <p>02</p>
            <h2>Quiet Accessories</h2>
            <span>Simple details that complete your look.</span>
          </div>
        </article>

        <article className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85"
            alt="Home collection"
          />

          <div>
            <p>03</p>
            <h2>Home Essentials</h2>
            <span>Objects made for calm, considered spaces.</span>
          </div>
        </article>

      </section>

    </main>
  )
}

export default Collections