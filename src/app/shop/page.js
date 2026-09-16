"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  
  const categories = ["All Products", "Home Decor", "Desk Accessories", "Toys & Games", "Art & Figurines", "Organizers", "Gifts"];
  
  const products = [
    {
      id: 1,
      title: "Geometric Desk Planter",
      price: "₹2,074",
      badge: "DESK",
      image: "/images/product_planter_1789551199185.jpg",
      material: "PLA+",
      category: "Desk Accessories"
    },
    {
      id: 2,
      title: "Minimalist Phone Stand",
      price: "₹1,244",
      badge: "DESK",
      image: "/images/product_phonestand_1789551213267.jpg",
      material: "PLA+",
      category: "Desk Accessories"
    },
    {
      id: 3,
      title: "Dragon Figurine",
      price: "₹4,148",
      badge: "ART",
      image: "/images/product_dragon_1789551228568.jpg",
      material: "Resin",
      category: "Art & Figurines"
    },
    {
      id: 4,
      title: "Honeycomb Wall Shelf",
      price: "₹1,576",
      badge: "HOME DECOR",
      image: "/images/product_shelf_1789551241782.jpg",
      material: "PLA+",
      category: "Home Decor"
    },
    {
      id: 5,
      title: "Cable Management Box",
      price: "₹2,489",
      badge: "ORGANIZERS",
      image: "/images/product_cablebox_1789551258913.jpg",
      material: "PETG",
      category: "Organizers"
    },
    {
      id: 6,
      title: "Flexi Rex",
      price: "₹1,078",
      badge: "TOYS",
      image: "/images/product_trex_1789551278939.jpg",
      material: "PLA+",
      category: "Toys & Games"
    },
    {
      id: 7,
      title: "Lithophane Photo Frame",
      price: "₹3,319",
      badge: "GIFTS",
      image: "/images/custom_prototype_1789548548021.jpg", 
      material: "PLA+",
      category: "Gifts"
    },
    {
      id: 8,
      title: "Gear Fidget Cube",
      price: "₹1,410",
      badge: "TOYS",
      image: "/images/personalized_gift_1789548500986.jpg",
      material: "PLA+",
      category: "Toys & Games"
    },
    {
      id: 9,
      title: "Geometric Pendant Lamp",
      price: "₹3,734",
      badge: "HOME DECOR",
      image: "/images/home_decor_1789548521878.jpg",
      material: "PLA+",
      category: "Home Decor"
    }
  ];

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page fade-in visible">
      <div className="shop-header">
        <h2>Explore Products</h2>
        <p>Browse our collection of 3D printed products.</p>
      </div>
      
      <div className="shop-filters-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search products..." />
        </div>
        
        <div className="filter-dropdown">
          <select>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        
        <div className="category-tags">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`tag ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="product-count">
        <p>{filteredProducts.length} products</p>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <span className="product-badge">{product.badge}</span>
              <span className="product-view-icon">
                 <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </span>
              <Image src={product.image} alt={product.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            
            <div className="product-info">
              <div className="product-title-row">
                <h4>{product.title}</h4>
                <span className="price">{product.price}</span>
              </div>
              <p className="product-desc">Custom 3D printed part with precision. Order now to customize size and color.</p>
              
              <div className="product-actions">
                <div className="material-select">
                  <select>
                    <option>{product.material}</option>
                    <option>PETG</option>
                    <option>ABS</option>
                  </select>
                </div>
                <button className="btn-add">+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
