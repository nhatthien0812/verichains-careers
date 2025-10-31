"use client";

import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

import { Card } from "./ui/card";

export function IntroSection() {
  const highlights = [
    { value: "$100B+", label: "Protected Assets" },
    { value: "200M+", label: "Protected Devices" },
    { value: "200K+", label: "Monthly Attacks Blocked" },
    { value: "7+", label: "Years Experience" },
  ];

  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<any>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!rootRef.current || hasAnimated.current) return;

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      if (!rootRef.current) return;

      // Animate elements
      scopeRef.current = createScope({ root: rootRef.current }).add(() => {
        // Animate title - fade in + slide up
        animate(".intro-title", {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
          ease: "out(4)",
        });

        // Animate feature cards with stagger
        animate(".intro-feature-card", {
          opacity: [0, 1],
          translateY: [40, 0],
          scale: [0.9, 1],
          duration: 500,
          delay: (el, i) => 400 + i * 150,
          ease: "out(4)",
        });

        // Animate description card
        animate(".intro-description", {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
          delay: 900,
          ease: "out(4)",
        });
      });
    };

    // Use Intersection Observer to trigger when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(rootRef.current);

    // Fallback: animate immediately if already in view after a short delay
    const timeoutId = setTimeout(() => {
      if (rootRef.current && !hasAnimated.current) {
        const rect = rootRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          runAnimation();
          observer.disconnect();
        }
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      if (scopeRef.current) {
        scopeRef.current.revert();
      }
    };
  }, []);

  return (
    <section
      id="why-us"
      ref={rootRef}
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-vc-surface/10 to-transparent scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-heading font-bold intro-title mb-4"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            Why <span className="text-light-blue">Verichains</span>?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {highlights.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 text-center border-vc-muted/20 bg-linear-to-br from-vc-surface/30 to-vc-surface/10 hover:from-vc-surface/40 hover:to-vc-surface/20 transition-all duration-300 intro-feature-card"
              style={{ opacity: 0, transform: "translateY(40px) scale(0.9)" }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-blue mb-2">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm text-vc-muted font-medium">
                {item.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div
          className="max-w-4xl mx-auto intro-description"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <Card className="p-8 lg:p-10 border-vc-muted/20 bg-vc-surface/20 backdrop-blur-sm">
            <div className="space-y-6 text-base leading-7 text-white">
              <p>
                Verichains is a global leader in security solutions for both
                traditional banking and finance as well as decentralized
                DeFi/Web3. Since 2017, Verichains has combined deep expertise in
                traditional security and blockchain technology to deliver
                cutting-edge solutions to over 200 global clients, including{" "}
                <span className="text-light-blue font-medium">
                  Binance, Bullish, Bybit, Galaxy, Polygon, BNB Chain, Aptos,
                  Sui, Kakao, Line Corp, Abu Dhabi Blockchain Center
                </span>{" "}
                as well as banks and financial institutions.
              </p>
              <p className="pt-4 border-t border-vc-muted/20">
                We&apos;re also proud to be the only firm that had led incident
                response for the largest Web3 hacks in history{" "}
                <span className="text-light-blue font-medium">
                  (Bybit, Binance/BNB, Ronin Network)
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
