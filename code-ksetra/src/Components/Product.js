import React, { useState } from 'react';
import './Product.css';
import { FaInfoCircle } from "react-icons/fa";
import { useSpring, animated, config } from "react-spring";
import Navbar from './Navbar';

function ImageUpload({ setImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate a local preview URL
    }
  };

  return (
    <div className="image-upload">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

function Product() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [image, setImage] = useState(null);

  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    config: config.gentle,
  });

  const confirmationAnimation = useSpring({
    opacity: showConfirmation ? 1 : 0,
    transform: showConfirmation ? "translateY(0%)" : "translateY(-50%)",
    config: config.wobbly,
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("Product added:", { productName, productPrice, productQuantity, image });
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setImage(null);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <>
    <Navbar/>
    <div className="product-container">
     
      <h1 className="page-title">Product Management</h1>
      <div className="add-product-section">
        <animated.form onSubmit={handleAddProduct} className="add-product-form" style={fadeIn}>
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
          <ImageUpload setImage={setImage} />
          {image && <img src={image} alt="Preview" className="image-preview" />}
          <button type="submit" className="submit-button">Add Product</button>
        </animated.form>
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
      <animated.div style={confirmationAnimation} className="confirmation-message">
        <p>Product added successfully!</p>
      </animated.div>
    </div>
    </>
  );
}

export default Product;
