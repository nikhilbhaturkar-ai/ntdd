"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/sports_hero_1789548478020.jpg",
    title: "SPORTS",
    desc: "Unlock the future of sports with advanced, custom-designed 3D printed gear for unmatched performance and style"
  },
  {
    image: "/images/personalized_gift_1789548500986.jpg",
    title: "PERSONALIZED GIFTS",
    desc: "Create something truly unique with our 3D printed personalized items! Elevate your space with a personalized touch."
  },
  {
    image: "/images/custom_prototype_1789548548021.jpg",
    title: "CUSTOM PROTOTYPE",
    desc: "Unlock innovation with our 3D-printed custom prototyping services. Perfect for testing and product development."
  },
  {
    image: "/images/home_decor_1789548521878.jpg",
    title: "HOME DÉCOR",
    desc: "Add a modern touch to your home with our 3D-printed décor and accessories. Functional art made to enhance your space."
  },
  {
    image: "/images/pet_accessories_1789548563046.jpg",
    title: "PET ACCESSORIES",
    desc: "Custom 3D printed pet accessories designed for style, comfort, and durability using premium-quality materials."
  }
];

export default function Home() {
  const fadeRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
        <section className="hero">
          {/* Background Images for Smooth Transition */}
          {slides.map((slide, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: idx === currentSlide ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: -1,
              }}
            />
          ))}

          <div className="hero-content fade-in visible" key={currentSlide} style={{ zIndex: 1, animation: 'fadeInUp 0.8s ease forwards' }}>
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].desc}</p>
          </div>
          {/* Slider Dots */}
          <div className="slider-nav" style={{ zIndex: 1 }}>
            <span className="arrow" onClick={prevSlide} style={{cursor: 'pointer'}}>&lt;</span>
            {slides.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                style={{cursor: 'pointer'}}
              ></span>
            ))}
            <span className="arrow" onClick={nextSlide} style={{cursor: 'pointer'}}>&gt;</span>
            <span 
              className="pause" 
              onClick={() => setIsPaused(!isPaused)} 
              style={{cursor: 'pointer', opacity: isPaused ? 0.5 : 1}}
            >
              {isPaused ? '▶' : '||'}
            </span>
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

      </main>



    </>
  );
}
