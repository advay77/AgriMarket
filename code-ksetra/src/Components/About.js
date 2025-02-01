import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLeaf, FaHandshake, FaPhoneAlt } from "react-icons/fa"
import "./About.css"

const AccordionItem = ({ title, content, icon, isOpen, onClick, index }) => {
  return (
    <motion.div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button className="accordion-header" onClick={onClick}>
        {icon}
        {title}
        <motion.span
          className="accordion-icon"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="accordion-content-inner">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function About() {
  const [openIndex, setOpenIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const accordionData = [
    {
      title: "Benefits of the App",
      content:
        "Our app revolutionizes agricultural trade by providing a direct connection between farmers and buyers. Key benefits include:\n\n• Elimination of middlemen, ensuring fair prices\n• Real-time market insights for informed decision-making\n• Secure and transparent transactions\n• User-friendly interface for easy navigation\n• Reduced food waste through efficient supply chain management",
      icon: <FaLeaf className="accordion-item-icon" />,
    },
    {
      title: "Purpose of the App",
      content:
        "The primary purpose of our app is to transform the agricultural supply chain and empower both farmers and consumers. We aim to:\n\n• Increase farmers' income by providing direct market access\n• Reduce food waste through better demand-supply matching\n• Offer consumers fresher produce at competitive prices\n• Promote sustainable farming practices\n• Foster a more transparent and efficient agricultural ecosystem",
      icon: <FaHandshake className="accordion-item-icon" />,
    },
    {
      title: "Contact Us",
      content:
        "We're here to assist you with any questions or concerns. Get in touch with us through the following channels:\n\n• Email: support@agrimarket.com\n• Phone: +91 XXXXXXXX\n• Live Chat: Available on our website\n• Social Media: Follow us @AgriConnect\n\nOur support team is available Monday to Friday, 9 AM to 5 PM EST. We strive to respond to all inquiries within 24 hours.",
      icon: <FaPhoneAlt className="accordion-item-icon" />,
    },
  ]

  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About AgriMarket
      </motion.h1>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            icon={item.icon}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default About

