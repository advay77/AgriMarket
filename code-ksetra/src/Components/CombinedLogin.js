import { useState } from "react"
import { FaUser, FaEnvelope, FaLock, FaTractor, FaStore, FaArrowLeft } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import "./CombinedLogin.css"
import { Link } from "react-router-dom"

const CombinedLogin = () => {
  const [userType, setUserType] = useState(null)
  const [action, setAction] = useState("Login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (action === "Sign up" && !formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }
    if (action === "Sign up" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", { userType, action, formData })
    }
  }

  const toggleAction = () => {
    setAction(action === "Login" ? "Sign up" : "Login")
    setErrors({})
  }

  const renderForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="login-form"
    >
      {action === "Sign up" && (
        <div className="form-group">
          <div className="input-icon-wrapper">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={errors.name ? "error" : ""}
            />
          </div>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
      )}

      <div className="form-group">
        <div className="input-icon-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={errors.email ? "error" : ""}
          />
        </div>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <div className="input-icon-wrapper">
          <FaLock className="input-icon" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder={action === "Login" ? "Enter password" : "Create password"}
            className={errors.password ? "error" : ""}
          />
        </div>
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>

      {action === "Sign up" && (
        <div className="form-group">
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              className={errors.confirmPassword ? "error" : ""}
            />
          </div>
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
      )}

      {action === "Login" && (
        <div className="forgot-password">
          Forgot password? <span className="click-here">Click here</span>
        </div>
      )}

      <div className="submit-container">
        {action === "Sign up" ? (
          userType === "farmer" ? (
            <Link to="/my-app/farmer
            ">
              <button type="submit" className="submit-button">Sign Up as Farmer</button>
            </Link>
          ) : (
            <Link to="/mybuyer-signup">
              <button type="submit" className="submit-button">Sign Up as Buyer</button>
            </Link>
          )
        ) : userType === "farmer" ? (
          <Link to="/my-app/farmer">
            <button type="submit" className="submit-button">Login as Farmer</button>
          </Link>
        ) : (
          <Link to="/my-app/buyer-dashboard">
            <button type="submit" className="submit-button">Login as Buyer</button>
          </Link>
        )}

        <button type="button" className="toggle-button" onClick={toggleAction}>
          {action === "Sign up" ? "Switch to Login" : "Switch to Sign up"}
        </button>
      </div>
    </motion.form>
  )

  return (
    <div className="combined-login-container">
      <div className="background-image"></div>
      <div className="login-card">
        <AnimatePresence mode="wait">
          {!userType ? (
            <motion.div
              key="user-selection"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="user-type-selection"
            >
              <h1 className="welcome-text">Welcome to AgriMarket</h1>
              <p className="sub-text">Choose your account type to get started</p>
              <div className="user-type-buttons">
                <button className="user-type-button farmer" onClick={() => setUserType("farmer")}>
                  <FaTractor className="button-icon" />
                  <span>Farmer</span>
                </button>
                <button className="user-type-button buyer" onClick={() => setUserType("buyer")}>
                  <FaStore className="button-icon" />
                  <span>Buyer</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="login-form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="login-form-container"
            >
              <button className="back-button" onClick={() => setUserType(null)}>
                <FaArrowLeft /> Back
              </button>
              <h2 className="form-title">
                {action} as {userType}
              </h2>
              {renderForm()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CombinedLogin
