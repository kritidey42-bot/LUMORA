import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
    addToBag,
  } = useCart()

  return (
    <main className="wishlist-page">

      <section className="wishlist-header">
        <p>YOUR SAVED EDIT</p>

        <h1>Wishlist.</h1>

        <span>
          {wishlist.length}{" "}
          {wishlist.length === 1 ? "item" : "items"} saved.
        </span>
      </section>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">

          <h2>Your wishlist is empty.</h2>

          <p>
            Save pieces you love and come back to them anytime.
          </p>

          <Link
            to="/shop"
            className="wishlist-shop-button"
          >
            Explore Collection
          </Link>

        </div>
      ) : (
        <section className="wishlist-grid">

          {wishlist.map((product) => (
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
                  className="wishlist-button active"
                  onClick={() => toggleWishlist(product)}
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  ♥
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
          ))}

        </section>
      )}

    </main>
  )
}

export default Wishlist