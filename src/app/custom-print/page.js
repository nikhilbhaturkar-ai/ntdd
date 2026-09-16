"use client";
import React, { useState } from 'react';

export default function CustomPrint() {
  const [material, setMaterial] = useState('PLA+');
  const [density, setDensity] = useState(20);
  const [layerHeight, setLayerHeight] = useState('0.20mm · Standard');
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Charcoal');

  const materials = [
    { id: 'PLA+', name: 'PLA+', price: '₹12/g', desc: 'Crisp detail, everyday parts' },
    { id: 'PETG', name: 'PETG', price: '₹14/g', desc: 'Tough, weather-friendly' },
    { id: 'ABS', name: 'ABS', price: '₹15/g', desc: 'Heat resistant, engineering' },
    { id: 'TPU', name: 'TPU Flex', price: '₹22/g', desc: 'Rubbery, bendable' }
  ];

  const colors = [
    { name: 'Charcoal', hex: '#222' },
    { name: 'White', hex: '#fff' },
    { name: 'Silver', hex: '#cccccc' },
    { name: 'Dark Gray', hex: '#333333' },
    { name: 'Light Gray', hex: '#888888' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Pink', hex: '#ec4899' },
    { name: 'Tan', hex: '#d2b48c' }
  ];

  return (
    <div className="custom-print-page fade-in visible">
      <div className="cp-header">
        <div className="cp-tag"><span>02</span> CUSTOM PRINT LAB</div>
        <h2>Print your own model</h2>
        <p>Drop your 3D file, dial in the specs, and watch the estimate react. The request — with your file — lands straight in the owner's inbox.</p>
      </div>

      <div className="cp-layout">
        {/* Left Column: Configuration */}
        <div className="cp-config">
          <div className="dropzone">
            <div className="drop-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h3>Drag & drop your 3D file</h3>
            <p>.STL · .OBJ · .3MF · .STEP — UP TO 100 MB</p>
          </div>

          <div className="config-section">
            <h4 className="section-label">MATERIAL</h4>
            <div className="materials-grid">
              {materials.map(m => (
                <div 
                  key={m.id} 
                  className={`material-card ${material === m.id ? 'active' : ''}`}
                  onClick={() => setMaterial(m.id)}
                >
                  <div className="m-card-top">
                    <h5>{m.name}</h5>
                    <span className="m-price">{m.price}</span>
                  </div>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="config-section">
            <div className="section-header-row">
              <h4 className="section-label">INFILL DENSITY</h4>
              <span className="density-val">{density}%</span>
            </div>
            <input 
              type="range" 
              className="styled-slider" 
              min="0" max="100" 
              value={density} 
              onChange={(e) => setDensity(e.target.value)} 
            />
          </div>

          <div className="config-row">
            <div className="config-section half">
              <h4 className="section-label">LAYER HEIGHT</h4>
              <select className="dark-select" value={layerHeight} onChange={(e) => setLayerHeight(e.target.value)}>
                <option>0.12mm · Fine</option>
                <option>0.20mm · Standard</option>
                <option>0.28mm · Draft</option>
              </select>
            </div>
            
            <div className="config-section half">
              <h4 className="section-label">QUANTITY</h4>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="config-section">
            <h4 className="section-label">FILAMENT COLOUR</h4>
            <div className="color-swatches">
              {colors.map(c => (
                <div 
                  key={c.name}
                  className={`swatch ${color === c.name ? 'active' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => setColor(c.name)}
                />
              ))}
            </div>
            <p className="selected-color-text">{color}</p>
          </div>
        </div>

        {/* Right Column: Estimate & Details */}
        <div className="cp-sidebar">
          <div className="estimate-card">
            <h4 className="estimate-label">LIVE ESTIMATE</h4>
            <div className="price-display">₹19</div>
            
            <div className="estimate-breakdown">
              <div className="breakdown-row">
                <span>Est. weight</span>
                <span>160g</span>
              </div>
              <div className="breakdown-row">
                <span>Est. print time</span>
                <span>110h</span>
              </div>
              <div className="breakdown-row">
                <span>Material</span>
                <span>{material} · {color}</span>
              </div>
              <div className="breakdown-row">
                <span>Setup fee</span>
                <span>₹99 included</span>
              </div>
            </div>
            
            <p className="estimate-disclaimer">
              Final quote is confirmed by the owner after checking your file's geometry.
            </p>
          </div>

          <div className="details-card">
            <h4 className="estimate-label">YOUR DETAILS</h4>
            <form className="details-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="dark-input" />
              <div className="form-row">
                <input type="email" placeholder="Email" className="dark-input half-input" />
                <input type="tel" placeholder="Phone" className="dark-input half-input" />
              </div>
              <textarea placeholder="Notes — deadlines, post-processing, anything..." className="dark-input text-area" rows="4"></textarea>
              <button type="submit" className="btn-submit-request">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                Send print request to owner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
