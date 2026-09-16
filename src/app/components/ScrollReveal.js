"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ponytail: one global observer handles all scroll reveals site-wide
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a brief moment for the new page to render its DOM nodes
    const timer = setTimeout(() => {
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
        el.style.transitionDelay = `${(i % 10) * 100}ms`; // cap delay so huge grids don't take forever
        el.classList.add("reveal-child");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
