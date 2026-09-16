import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top-line"></div>
      <div className="footer-content">
        <div className="footer-column brand-column">
          <div className="logo">
            <h1><span className="dot"></span>THE <span className="box">3D</span> CRAFTED</h1>
          </div>
          <p className="footer-desc">A print lab turning sketches, STL files and wild ideas into precision parts, decor and desk toys — one layer at a time.</p>
          <div className="social-icons-footer">
            <a href="#" className="social-circle">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-circle">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="social-circle">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <ul>
            <li><Link href="/shop">Shop Models</Link></li>
            <li><Link href="#">Print Custom</Link></li>
            <li><Link href="#">Material Guide</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li><Link href="#">Get a Quote</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Shipping</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-column contact-column">
          <h3>TALK TO THE LAB</h3>
          <ul>
            <li><span className="icon">📞</span> +91 98765 43210</li>
            <li><span className="icon">✉️</span> hello@forge3d.in</li>
            <li><span className="icon">📍</span> Workshop 12, Makers Quarter, Bengaluru, Karnataka 560001</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 The 3D Crafted. All rights reserved.</p>
        <p>Layer by layer.</p>
      </div>
    </footer>
  );
}
