
import { useState } from "react"
import {
  FaHome,
  FaStore,
  FaRobot,
  FaPhone,
  FaInfoCircle,
  FaUser,
  FaBars,
  FaSignOutAlt,
  FaBox,
  FaHistory,
  FaCog,
  FaNewspaper,
  FaCheck,
  FaPlus,
} from "react-icons/fa"
import { useSpring, animated, config } from "react-spring"
import "./Page.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  const fadeIn = useSpring({
    opacity: showAddProduct ? 1 : 0,
    transform: showAddProduct ? "translateY(0%)" : "translateY(-20%)",
    config: config.gentle,
  })

  const confirmationAnimation = useSpring({
    opacity: showConfirmation ? 1 : 0,
    transform: showConfirmation ? "translateY(0%)" : "translateY(-50%)",
    config: config.wobbly,
  })

  const handleAddProduct = (e) => {
    e.preventDefault()
    // Here you would typically send the product data to your backend
    console.log("Product added:", { productName, productPrice, productQuantity })
    setProductName("")
    setProductPrice("")
    setProductQuantity("")
    setShowAddProduct(false)
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 3000)
  }

  return (
    <div>
      {/* <Navbar/> */}

      <div className="content-wrapper">
        <div className="side-bar">
          <h1 className="port">Farmer Portal</h1>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="menu-icon" /> Menu
          </button>

          {isMenuOpen && (
            <div className="menu-content">
              <button className="menu-item" onClick={() => setShowAddProduct(!showAddProduct)}>
                <FaPlus className="menu-icon" /> Add Product
              </button>
              <button className="menu-item">
                <FaBox className="menu-icon" /> Products
              </button>
              <button className="menu-item">
                <FaCheck className="menu-icon" /> Chats
              </button>
              <button className="menu-item">
                <FaHistory className="menu-icon" /> History
              </button>
              <button className="menu-item">
                <FaNewspaper className="menu-icon" /> News
              </button>
              <button className="menu-item">
                <FaCog className="menu-icon" /> Settings
              </button>
              <button className="menu-item logout">
                <FaSignOutAlt className="menu-icon" /> Logout
              </button>
            </div>
          )}
        </div>

        <div className="main-content">
          <h1>Welcome to AgriMarket</h1>
          <p>Connect with buyers and sell your products easily!</p>

          <animated.div style={fadeIn}>
            {showAddProduct && (
              <div className="add-product-section">
                <form onSubmit={handleAddProduct} className="add-product-form">
                  <h2>Add New Product</h2>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                    required
                  />
                  <button type="submit">Add Product</button>
                </form>
                <div className="farmer-guide">
                  <h3>
                    <FaInfoCircle /> Guide for Farmers
                  </h3>
                  <ul>
                    <li>Enter the name of your product clearly and accurately.</li>
                    <li>Set a competitive price based on market trends and your costs.</li>
                    <li>Specify the quantity available for sale.</li>
                    <li>Adding high-quality products increases your chances of making sales.</li>
                    <li>Keep your product listings up-to-date for better visibility.</li>
                  </ul>
                  <p>Need help? Contact our support team for assistance!</p>
                </div>
              </div>
            )}
          </animated.div>

          <animated.div style={confirmationAnimation} className="confirmation-message">
            {showConfirmation && <p>Product added successfully!</p>}
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Page


