"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState({});
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const categories = ["All Products", "Home Decor", "Desk Accessories", "Toys & Games", "Art & Figurines", "Organizers", "Gifts"];
  
  const products = [
    {
      id: 1,
      title: "Geometric Desk Planter",
      price: "₹2,074",
      badge: "DESK",
      image: "/images/product_planter_1789551199185.jpg",
      material: "PLA+",
      category: "Desk Accessories",
      numericPrice: 2074
    },
    {
      id: 2,
      title: "Minimalist Phone Stand",
      price: "₹1,244",
      badge: "DESK",
      image: "/images/product_phonestand_1789551213267.jpg",
      material: "PLA+",
      category: "Desk Accessories",
      numericPrice: 1244
    },
    {
      id: 3,
      title: "Dragon Figurine",
      price: "₹4,148",
      badge: "ART",
      image: "/images/product_dragon_1789551228568.jpg",
      material: "Resin",
      category: "Art & Figurines",
      numericPrice: 4148
    },
    {
      id: 4,
      title: "Honeycomb Wall Shelf",
      price: "₹1,576",
      badge: "HOME DECOR",
      image: "/images/product_shelf_1789551241782.jpg",
      material: "PLA+",
      category: "Home Decor",
      numericPrice: 1576
    },
    {
      id: 5,
      title: "Cable Management Box",
      price: "₹2,489",
      badge: "ORGANIZERS",
      image: "/images/product_cablebox_1789551258913.jpg",
      material: "PETG",
      category: "Organizers",
      numericPrice: 2489
    },
    {
      id: 6,
      title: "Flexi Rex",
      price: "₹1,078",
      badge: "TOYS",
      image: "/images/product_trex_1789551278939.jpg",
      material: "PLA+",
      category: "Toys & Games",
      numericPrice: 1078
    },
    {
      id: 7,
      title: "Lithophane Photo Frame",
      price: "₹3,319",
      badge: "GIFTS",
      image: "/images/custom_prototype_1789548548021.jpg", 
      material: "PLA+",
      category: "Gifts",
      numericPrice: 3319
    },
    {
      id: 8,
      title: "Gear Fidget Cube",
      price: "₹1,410",
      badge: "TOYS",
      image: "/images/personalized_gift_1789548500986.jpg",
      material: "PLA+",
      category: "Toys & Games",
      numericPrice: 1410
    },
    {
      id: 9,
      title: "Geometric Pendant Lamp",
      price: "₹3,734",
      badge: "HOME DECOR",
      image: "/images/home_decor_1789548521878.jpg",
      material: "PLA+",
      category: "Home Decor",
      numericPrice: 3734
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleMaterialChange = (productId, material) => {
    setSelectedMaterials(prev => ({ ...prev, [productId]: material }));
  };

  const addToCart = (product) => {
    const material = selectedMaterials[product.id] || product.material;
    setCart(prev => [...prev, { 
      cartId: Date.now() + Math.random(), 
      ...product, 
      selectedMaterial: material 
    }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.numericPrice, 0);

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    
    let message = "Hi! I'd like to place an order:\n\n";
    cart.forEach(item => {
      message += `- 1x ${item.title} (${item.selectedMaterial}) : ${item.price}\n`;
    });
    message += `\n*Total: ₹${cartTotal.toLocaleString()}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919175256675?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="shop-page fade-in visible">
      <div className="shop-header" data-reveal>
        <h2>Explore Products</h2>
        <p>Browse our collection of 3D printed products.</p>
      </div>
      
      <div className="shop-filters-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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

      <div className="product-grid" data-stagger style={{ position: 'relative' }}>
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
                  <select 
                    value={selectedMaterials[product.id] || product.material}
                    onChange={(e) => handleMaterialChange(product.id, e.target.value)}
                  >
                    <option value={product.material}>{product.material}</option>
                    <option value="PETG">PETG</option>
                    <option value="ABS">ABS</option>
                    <option value="TPU Flex">TPU Flex</option>
                  </select>
                </div>
                <button className="btn-add" onClick={() => addToCart(product)}>+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart UI */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px'
        }}
      >
        {isCartOpen && (
          <div style={{
            background: 'var(--bg-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '20px',
            width: '320px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Your Cart</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>✕</button>
            </div>
            
            {cart.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)' }}>Your cart is empty.</p>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {cart.map(item => (
                    <div key={item.cartId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
                      <div>
                        <div style={{ fontWeight: '500' }}>{item.title}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{item.selectedMaterial}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>{item.price}</span>
                        <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', padding: 0 }}>×</button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '15px' }}>
                  <span>Total:</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                
                <button 
                  onClick={checkoutViaWhatsApp}
                  style={{
                    width: '100%',
                    background: 'var(--text-primary)',
                    color: 'var(--bg-color)',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <img src="/images/whatsapp_icon.png" width="18" height="18" alt="WhatsApp" />
                  Checkout via WhatsApp
                </button>
              </>
            )}
          </div>
        )}

        {cart.length > 0 && !isCartOpen && (
          <button 
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-color)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            View Cart ({cart.length})
          </button>
        )}
      </div>
    </div>
  );
}
