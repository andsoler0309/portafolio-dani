"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll to horizontal movement
  // total cards = 4, each ~400px + gap, so we need roughly (4-1) * card width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const sectionY = useTransform(scrollYProgress, [0, 0.05], ["6%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.05], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="relative z-30"
      style={{ height: "300vh" }}
    >
      <motion.section
        style={{
          y: sectionY,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
        className="sticky top-0 h-screen overflow-hidden bg-bg-primary shadow-[0_-20px_60px_rgba(0,0,0,0.06)]"
        id="services"
        aria-label="Services"
      >
        <div className="h-full flex flex-col justify-center">
          <div className="container-main mb-8 md:mb-12">
            <SectionHeader label="What I do" count={services.length} />
          </div>

          {/* Horizontal scroll track */}
          <div className="overflow-hidden">
            <motion.div
              ref={scrollRef}
              style={{ x }}
              className="flex gap-6 md:gap-8 pl-6 md:pl-12 lg:pl-16"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.number}
                  className="group flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] p-6 md:p-8 rounded-2xl border border-stone/20 hover:border-sage/40 bg-bg-card transition-all duration-500 hover:shadow-lg hover:shadow-sage/5"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-terracotta font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-light opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-sage group-hover:bg-sage/10 transition-all duration-300">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-fg-muted group-hover:text-sage transition-colors duration-300"
                      >
                        <path
                          d="M1 11L11 1M11 1H4M11 1V8"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl font-medium mb-4 group-hover:text-terracotta transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-fg-secondary text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}

              {/* Spacer at end */}
              <div className="flex-shrink-0 w-16 md:w-24" aria-hidden="true" />
            </motion.div>
          </div>

          {/* Scroll progress indicator */}
          <div className="container-main mt-8 md:mt-12">
            <div className="flex items-center gap-4">
              <span className="text-fg-muted text-xs tracking-widest uppercase">Scroll</span>
              <div className="flex-1 h-[2px] bg-stone/20 rounded-full overflow-hidden max-w-xs">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  className="h-full bg-sage rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
