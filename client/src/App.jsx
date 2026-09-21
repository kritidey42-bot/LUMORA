import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Bag from "./pages/Bag"
import Collections from "./pages/Collections"
import About from "./pages/About"
import Wishlist from "./pages/Wishlist"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/bag" element={<Bag />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App