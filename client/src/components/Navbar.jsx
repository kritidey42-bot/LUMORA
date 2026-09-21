import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const { bagCount, wishlist } = useCart()

  const wishlistCount = wishlist.length

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="navbar-logo">
          LUMORA
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="navbar-actions">

          <Link to="/shop" className="navbar-search">
            Search
          </Link>

          <Link
            to="/wishlist"
            className="wishlist-link"
            aria-label="Wishlist"
          >
            ♡ {wishlistCount > 0 && `(${wishlistCount})`}
          </Link>

          <Link to="/bag" className="bag-link">
            Bag ({bagCount})
          </Link>

        </div>

      </div>
    </header>
  )
}

export default Navbar