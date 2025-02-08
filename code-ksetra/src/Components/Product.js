import React from 'react'
import { useState } from "react"
import './Product.css'
import {
  FaBars,
  FaSignOutAlt,
  FaBox,
  FaHistory,
  FaCog,
  FaNewspaper,
  FaCheck,
  FaPlus,
  FaInfoCircle
} from "react-icons/fa"
import { useSpring, animated, config } from "react-spring"
import "./Page.css"
import { Link } from "react-router-dom"

function ImageUpload({ setImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate a local preview URL
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}


function Product() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [image, setImage] = useState(null)

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
    console.log("Product added:", { productName, productPrice, productQuantity, image })
    setProductName("")
    setProductPrice("")
    setProductQuantity("")
    setImage(null)
    setShowAddProduct(false)
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 3000)
  }


  return (
    <>
    
    <div className="top">
        {/* <animated.div style={fadeIn}> */}
            
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

                  {/* Image Upload Component */}
                  <ImageUpload setImage={setImage} />
                  {image && <img src={image} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}

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
            
          {/* </animated.div> */}

          <animated.div style={confirmationAnimation} className="confirmation-message">
            <p>Product added successfully!</p>
          </animated.div>
      
    </div>
    </>
  )
}

export default Product
