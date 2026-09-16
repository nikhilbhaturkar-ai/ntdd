"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <h1><span className="dot"></span>THE <span className="box">3D</span> CRAFTED</h1>
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/custom-print">Custom Print</Link></li>
            <li><Link href="/material-guide">Material Guide</Link></li>
            <li><Link href="/get-a-quote">Get a Quote</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
        <div className="nav-actions">
          <div className="avatar">
            <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" />
          </div>
          <button className="btn-order">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Order
          </button>
        </div>
      </header>
  );
}
