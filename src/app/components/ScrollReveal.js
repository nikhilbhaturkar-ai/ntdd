"use client";
import { useEffect } from "react";

// ponytail: one global observer handles all scroll reveals site-wide
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all elements with data-reveal attribute
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
    });

    // Also observe stagger children
    document.querySelectorAll("[data-stagger] > *").forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
      el.classList.add("reveal-child");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
