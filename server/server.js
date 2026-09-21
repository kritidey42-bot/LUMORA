const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "LUMORA API is running successfully.",
  })
})

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Essential Linen Shirt",
      category: "Apparel",
      price: 2499,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      name: "Minimal Leather Bag",
      category: "Accessories",
      price: 3299,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      name: "Everyday Sneakers",
      category: "Footwear",
      price: 3999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 4,
      name: "Sculptural Ceramic Vase",
      category: "Home",
      price: 1899,
      image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 5,
      name: "Soft Knit Cardigan",
      category: "Apparel",
      price: 2899,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 6,
      name: "Classic Wristwatch",
      category: "Accessories",
      price: 4599,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 7,
      name: "Minimal Desk Lamp",
      category: "Home",
      price: 2199,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 8,
      name: "Everyday Sunglasses",
      category: "Accessories",
      price: 1799,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    },
  ])
})

app.listen(PORT, () => {
  console.log(`LUMORA API running at http://localhost:${PORT}`)
})