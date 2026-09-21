
import { useCart } from "../context/CartContext"
import { useState } from "react"

function Bag() {
  const { bag, removeFromBag } = useCart()
  const [checkoutMessage, setCheckoutMessage] = useState(false)

  const subtotal = bag.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <main className="bag-page">

      <section className="bag-header">
        <p>YOUR LUMORA BAG</p>

        <h1>Your Bag.</h1>

        <span>
          {bag.length} {bag.length === 1 ? "item" : "items"} selected.
        </span>
      </section>

      {bag.length === 0 ? (
        <div className="empty-bag">
          <h2>Your bag is empty.</h2>

          <p>
            Discover thoughtfully selected essentials and add something you love.
          </p>
        </div>
      ) : (
        <>
          <section className="bag-items">

            {bag.map((product, index) => (
              <article
                className="bag-item"
                key={`${product.id}-${index}`}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <p>{product.category}</p>

                  <h2>{product.name}</h2>

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <button
                    className="remove-button"
                    onClick={() => removeFromBag(index)}
                  >
                    Remove
                  </button>
                </div>

              </article>
            ))}

          </section>

          <div className="bag-summary">

            <div>
              <span>Subtotal</span>

              <strong>
                ₹{subtotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>Shipping</span>

              <strong>FREE</strong>
            </div>

            <div className="bag-total">
              <span>Total</span>

              <strong>
                ₹{subtotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
  className="checkout-button"
  onClick={() => setCheckoutMessage(true)}
>
  Proceed to Checkout
</button>

{checkoutMessage && (
  <div className="checkout-message">
    <h2>You're almost there.</h2>
    <p>
      Checkout is ready for the next stage of your LUMORA experience.
    </p>
  </div>
)}

          </div>
        </>
      )}

    </main>
  )
}

export default Bag