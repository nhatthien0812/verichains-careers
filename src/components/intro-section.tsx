"use client";

import { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import { features } from "@/lib/data";

export function IntroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<any>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const runAnimation = () => {
      if (!rootRef.current) return;

      // Set initial styles inline
      const title = rootRef.current.querySelector(
        ".intro-title"
      ) as HTMLElement;
      const description = rootRef.current.querySelector(
        ".intro-description"
      ) as HTMLElement;
      const cards = rootRef.current.querySelectorAll(
        ".intro-feature-card"
      ) as NodeListOf<HTMLElement>;

      if (title) {
        title.style.opacity = "0";
        title.style.transform = "translateY(30px)";
      }
      if (description) {
        description.style.opacity = "0";
        description.style.transform = "translateY(20px)";
      }
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px) scale(0.9)";
      });

      // Now animate
      scopeRef.current = createScope({ root: rootRef.current }).add(() => {
        // Animate title - fade in + slide up
        animate(".intro-title", {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          ease: "out(4)",
        });

        // Animate description - fade in with delay
        animate(".intro-description", {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: 200,
          ease: "out(4)",
        });

        // Animate feature cards with stagger
        animate(".intro-feature-card", {
          opacity: [0, 1],
          translateY: [40, 0],
          scale: [0.9, 1],
          duration: 600,
          delay: (el, i) => 400 + i * 150,
          ease: "out(4)",
        });
      });
    };

    // Use Intersection Observer to trigger when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(rootRef.current);

    // Fallback: animate immediately if already in view or after 500ms
    setTimeout(() => {
      if (rootRef.current) {
        const rect = rootRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          runAnimation();
          observer.disconnect();
        }
      }
    }, 500);

    return () => {
      observer.disconnect();
      if (scopeRef.current) {
        scopeRef.current.revert();
      }
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-vc-surface/20"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-heading font-bold intro-title">
            Why <span className="text-light-blue">Verichains</span>?
          </h2>
          <p className="text-base leading-6 text-white intro-description">
            <span className="text-light-blue">Verichains</span> is Asia&apos;s
            premier blockchain security firm, trusted by leading DeFi protocols
            and Web3 companies. Our team of security experts works on
            cutting-edge research, audits, and tools that protect billions of
            dollars in digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl card-glass border border-vc-muted/20 intro-feature-card"
              >
                <h3 className="text-heading2 font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-base leading-6 text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
