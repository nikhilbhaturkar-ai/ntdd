"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="hero"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/images/sports_hero_1789548478020.jpg')` }}
        >
          <div className="hero-content fade-in" ref={addToRefs}>
            <h2>SPORTS</h2>
            <p>Unlock the future of sports with advanced, custom-designed 3D printed gear for unmatched performance and style</p>
          </div>
          {/* Slider Dots */}
          <div className="slider-nav">
            <span className="arrow">&lt;</span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="arrow">&gt;</span>
            <span className="pause">||</span>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="feature-section left-image fade-in" ref={addToRefs}>
          <div className="feature-image">
            <Image src="/images/personalized_gift_1789548500986.jpg" alt="Personalized Gifts" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="feature-text">
            <span className="subtitle">THE 3D CRAFTED</span>
            <h3>Personalized Gifts</h3>
            <p>Create something truly unique with our 3D printed personalized items! Whether it's a special gift or a custom piece for your home, we craft each item with precision to reflect your style. Design your perfect creation today! Elevate your space with a personalized touch, as our meticulous process ensures each item is a true reflection of your individual style and taste.</p>
            <a href="#" className="btn-outline">HOP IN</a>
          </div>
        </section>

        <section className="feature-section right-image fade-in" ref={addToRefs}>
          <div className="feature-text">
            <span className="subtitle">THE 3D CRAFTED</span>
            <h3>Custom Prototype</h3>
            <p>Unlock innovation with our 3D-printed custom prototyping services. We offer fast, precise, and cost-effective solutions to bring your ideas to life, from concept to creation. Perfect for testing, design iterations, and product development.</p>
            <a href="#" className="btn-outline">HOP IN</a>
          </div>
          <div className="feature-image">
            <Image src="/images/custom_prototype_1789548548021.jpg" alt="Custom Prototype" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </section>

        <section className="feature-section left-image fade-in" ref={addToRefs}>
          <div className="feature-image">
            <Image src="/images/home_decor_1789548521878.jpg" alt="Home Decor & Accessories" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="feature-text">
            <span className="subtitle">THE 3D CRAFTED</span>
            <h3>Home Décor & Accessories</h3>
            <p>Add a modern touch to your home with our 3D-printed décor and accessories. From custom designs to functional art, each piece is made to enhance your space with style and innovation.</p>
            <a href="#" className="btn-outline">HOP IN</a>
          </div>
        </section>

        <section className="feature-section right-image fade-in" ref={addToRefs}>
          <div className="feature-text">
            <span className="subtitle">THE 3D CRAFTED</span>
            <h3>Pet Accessories</h3>
            <p>Custom 3D printed pet accessories designed for style, comfort, and durability. Explore personalized pet tags, feeding accessories, decorative items, and unique pet products made with premium-quality materials and modern 3D printing technology.</p>
            <a href="#" className="btn-outline">HOP IN</a>
          </div>
          <div className="feature-image">
            <Image src="/images/pet_accessories_1789548563046.jpg" alt="Pet Accessories" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </section>

        {/* Information Section */}
        <section className="info-section fade-in" ref={addToRefs}>
          <h3>What is 3D Printing?</h3>
          <p className="intro">3D printing, or additive manufacturing, is a process that creates objects layer by layer from a digital design. It's used across industries for everything from prototyping to final products, offering flexibility in materials like plastic, metal, and resin.</p>
          
          <h4>Benefits of 3D Printing:</h4>
          <ul>
            <li><strong>Customization:</strong> Ideal for creating personalized products tailored to specific needs.</li>
            <li><strong>Faster Prototyping:</strong> Quickly test and iterate designs, reducing product development time.</li>
            <li><strong>Cost-Effective:</strong> Affordable for low-volume production with minimal waste.</li>
            <li><strong>Complex Designs:</strong> Produce intricate, unique designs that are hard to achieve with traditional methods.</li>
            <li><strong>Eco-Friendly:</strong> Reduces material waste by using only the required amount of material, making it a more sustainable option for production.</li>
          </ul>
        </section>
      </main>


    </>
  );
}
