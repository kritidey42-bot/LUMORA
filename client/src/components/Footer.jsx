import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            LUMORA
          </Link>

          <p>
            Thoughtfully selected essentials
            <br />
            for modern everyday living.
          </p>
        </div>

        <div className="footer-column">

          <h3>Explore</h3>

          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/about">About</Link>

        </div>

        <div className="footer-column">

          <h3>Information</h3>

          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>

        </div>

        <div className="footer-newsletter">

          <h3>Stay in the loop.</h3>

          <p>
            Get updates on new collections,
            thoughtful edits and LUMORA news.
          </p>

          <div className="footer-email">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button>
              →
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 LUMORA. All rights reserved.
        </span>

        <span>
          Modern essentials. Thoughtfully selected.
        </span>

      </div>

    </footer>
  )
}

export default Footer