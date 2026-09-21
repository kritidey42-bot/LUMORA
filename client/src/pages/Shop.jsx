import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

function Shop() {
  const {
    addToBag,
    wishlist,
    toggleWishlist,
  } = useCart()

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("featured")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const categories = [
    "All",
    "Apparel",
    "Accessories",
    "Footwear",
    "Home",
  ]

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load products.")
        }

        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading products:", error)
        setError("We couldn't load the collection. Please try again.")
        setLoading(false)
      })
  }, [])

  const filteredProducts = products
    .filter(
      (product) =>
        (category === "All" || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price
      }

      if (sort === "high-low") {
        return b.price - a.price
      }

      return 0
    })

  return (
    <main className="shop-page">

      <section className="shop-header">
        <p>THE COLLECTION</p>

        <h1>Modern essentials.</h1>

        <span>
          Carefully selected pieces for everyday living.
        </span>
      </section>

      <div className="shop-search">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="shop-controls">

        <p className="product-count">
          {loading
            ? "Loading collection..."
            : `${filteredProducts.length} products`}
        </p>

        <div className="sort-box">
          <label htmlFor="sort">Sort by</label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

      </div>

      {loading && (
        <div className="shop-status">
          <p>Loading the LUMORA collection...</p>
        </div>
      )}

      {error && (
        <div className="shop-status shop-error">
          <h2>Something went wrong.</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <section className="product-grid">

          {filteredProducts.map((product) => {

            const isWishlisted = wishlist.some(
              (item) => item.id === product.id
            )

            return (
              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className={`wishlist-button ${
                      isWishlisted ? "active" : ""
                    }`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    {isWishlisted ? "♥" : "♡"}
                  </button>

                </div>

                <div className="product-info">

                  <div>
                    <p className="product-category">
                      {product.category}
                    </p>

                    <h2>{product.name}</h2>
                  </div>

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <button
                    className="add-to-bag"
                    onClick={() => addToBag(product)}
                  >
                    Add to Bag
                  </button>

                </div>

              </article>
            )
          })}

        </section>
      )}

      {!loading &&
        !error &&
        filteredProducts.length === 0 && (
          <div className="shop-status">
            <h2>No products found.</h2>
            <p>Try another search or category.</p>
          </div>
        )}

    </main>
  )
}

export default Shop