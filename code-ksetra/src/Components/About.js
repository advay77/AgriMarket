"use client"

import { useState, useEffect } from "react"
import "./About.css"

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={onClick}>
        {title}
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-content-inner">{content}</div>
        </div>
      )}
    </div>
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
      title: "Our Mission",
      content:
        "At AgriMarket, our mission is to revolutionize agricultural trade by providing a direct connection between farmers and buyers. We strive to create a more efficient, transparent, and sustainable agricultural ecosystem that benefits both producers and consumers.",
    },
    {
      title: "Key Features",
      content: (
        <ul>
          <li>Direct farmer-buyer connections</li>
          <li>Real-time market insights</li>
          <li>Secure and transparent transactions</li>
          <li>User-friendly interface</li>
          <li>Efficient supply chain management</li>
        </ul>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div>
          <p>We're here to assist you with any questions or concerns. Get in touch with us:</p>
          <ul>
            <li>Email: support@agrimarket.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Farm Lane, Agriville, AG 12345</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <div className={`about-container ${isVisible ? "visible" : ""}`}>
      <h1 className="about-title">About AgriMarket</h1>
      <p className="about-subtitle">Connecting farmers and buyers for a sustainable future</p>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  )
}

export default About

