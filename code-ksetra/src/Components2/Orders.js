import { useState } from "react";
import { FaBox } from "react-icons/fa";
import './Orders.css';
import Navbar2 from "./Navbar2";
import { motion, AnimatePresence } from "framer-motion";

export default function BuyersPortal() {
  const [activeTab, setActiveTab] = useState("orders");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const recentOrders = [
    {
      id: 1,
      date: "2025-02-08",
      status: "Delivered",
      total: "120.00",
      items: 3,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop",
      details: "3 bags of wheat delivered."
    },
    {
      id: 2,
      date: "2025-02-05",
      status: "Shipped",
      total: "85.50",
      items: 1,
      image: "https://plus.unsplash.com/premium_photo-1694864661950-288ec8a06e5c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=",
      details: "1 ton of sugar cane shipped."
    },
  ];

  const historicalOrders = [
    {
      id: 3,
      date: "2025-01-25",
      status: "Completed",
      total: "220.00",
      items: 4,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop",
      details: "4 kg of apples purchased."
    },
    {
      id: 4,
      date: "2024-12-15",
      status: "Cancelled",
      total: "50.00",
      items: 2,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop",
      details: "2 dozen mangoes ordered but cancelled."
    },
  ];

  const renderOrders = (orders) => {
    return orders.map((order) => (
      <div key={order.id} className="order-card">
        <img src={order.image} alt={`Order ${order.id}`} className="order-image" />
        <div className="order-header">
          <h3>Order #{order.id}</h3>
          <span className={`status-badge ${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </div>
        <div className="order-details">
          <div className="detail-row">
            <span>Date:</span>
            <span>{order.date}</span>
          </div>
          <div className="detail-row">
            <span>Items:</span>
            <span>{order.items}</span>
          </div>
          <div className="detail-row">
            <span>Total:</span>
            <span className="total">₹{order.total}</span>
          </div>
        </div>
        <button className="view-details-btn" onClick={() => setSelectedOrder(order)}>View Details</button>
      </div>
    ));
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="buyers-portal">
      <Navbar2 />
      <main className="main-content">
        <div className="content-section">
          <h2>Recent Orders</h2>
          <button className="new-order-btn">
            <FaBox className="icon" /> New Order
          </button>
          <div className="orders-grid">
            {renderOrders(recentOrders)}
          </div>
        </div>

        <div className="content-section">
          <h2>Order History</h2>
          <div className="orders-grid">
            {renderOrders(historicalOrders)}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <button className="close" onClick={closeModal}>&times;</button>
                <h2>Order Details for Order #{selectedOrder.id}</h2>
                <img src={selectedOrder.image} alt={`Order ${selectedOrder.id}`} className="order-image" />
                <p><strong>Date:</strong> {selectedOrder.date}</p>
                <p><strong>Status:</strong> {selectedOrder.status}</p>
                <p><strong>Total:</strong> ₹{selectedOrder.total}</p>
                <p><strong>Items:</strong> {selectedOrder.items}</p>
                <p><strong>Details:</strong> {selectedOrder.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 BuyersMarket. All rights reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Help Center</span>
          </div>
        </div>
      </footer>
    </div>
  );
}