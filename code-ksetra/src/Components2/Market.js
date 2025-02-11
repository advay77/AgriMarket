"use client"

import { useState } from "react"
import { FaShoppingCart, FaTimes, FaSearch, FaLeaf } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import "./Market.css"
import Navbar2 from "./Navbar2";

const products = [
  {
    id: 1,
    name: "Organic Wheat",
    price: "₹40/kg",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop",
    details: "High-quality organic wheat sourced from local farmers.",
    farmer: "Kanak Sharma",
  },
  {
    id: 2,
    name: "Fresh Sugar Cane",
    price: "₹30/bundle",
    image: "https://plus.unsplash.com/premium_photo-1694864661950-288ec8a06e5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
    details: "Sweet and juicy sugar cane, perfect for juicing or cooking.",
    farmer: "Chirag pandit",
  },
  {
    id: 3,
    name: "Crisp Apples",
    price: "₹100/kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop",
    details: "Crisp and sweet apples, handpicked from our orchards.",
    farmer: "Advay Anand",
  },
  {
    id: 4,
    name: "Ripe Mangoes",
    price: "₹150/dozen",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop",
    details: "Juicy Alphonso mangoes, the king of fruits, directly from farms.",
    farmer: "G.S Dhakadd",
  },
  {
    id: 5,
    name: "Basmati Rice",
    price: "₹50/kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop",
    details: "Premium aromatic basmati rice, ideal for your daily meals.",
    farmer: "Vikram Choudhury",
  },
  {
    id: 6,
    name: "Vine Tomatoes",
    price: "₹40/kg",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop",
    details: "Fresh, ripe tomatoes on the vine, perfect for cooking and salads.",
    farmer: "Naruto Singh",
  },
  {
    id: 7,
    name: "Farm Potatoes",
    price: "₹25/kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop",
    details: "Versatile, locally grown potatoes for all your culinary needs.",
    farmer: "Goku singh",
  },
  {
    id: 8,
    name: "Organic Bananas",
    price: "₹60/dozen",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop",
    details: "Naturally ripened organic bananas, a great snack for any time.",
    farmer: "Piyush Shukhla",
  },
]

const Market = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace("₹", "").split("/")[0])
    return sum + price * item.quantity
  }, 0)

  return (
    <div className="market">
      <Navbar2/>
      <header className="market-header">
        <div className="logo">
          <FaLeaf className="logo-icon" />
          <h1>FarmConnect</h1>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search fresh produce..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="cart-container">
          <button className="cart-button" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FaShoppingCart />
            <span className="cart-count">{totalItems}</span>
          </button>
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                className="cart-preview"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Shopping Cart</h3>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">
                      <FaTimes />
                    </button>
                  </div>
                ))}
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <div className="cart-summary">
                    <p>Total: ₹{totalPrice.toFixed(2)}</p>
                    <button className="checkout-btn">Proceed to Checkout</button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <h2>Fresh Produce from Local Farmers</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-farmer">By {product.farmer}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  handleAddToCart(product, e)
                }}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <button className="close" onClick={handleCloseModal}>
                  <FaTimes />
                </button>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="modal-image"
                />
                <h3 className="modal-name">{selectedProduct.name}</h3>
                <p className="modal-price">{selectedProduct.price}</p>
                <p className="modal-farmer">Grown by {selectedProduct.farmer}</p>
                <p className="modal-details">{selectedProduct.details}</p>
                <button className="add-to-cart-btn" onClick={(e) => handleAddToCart(selectedProduct, e)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Market