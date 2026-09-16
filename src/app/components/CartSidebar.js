import React from "react";
import Link from "next/link";

export default function CartSidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`cart-overlay ${isOpen ? "open" : ""}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Cart (0)</h2>
          <button className="cart-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="cart-body">
          <div className="cart-empty-state">
            <svg className="cart-bag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h3>Your cart is empty</h3>
            <p>Browse our products or upload your own 3D model to get started.</p>
            <Link href="/shop" onClick={onClose} className="btn-cart-continue">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
