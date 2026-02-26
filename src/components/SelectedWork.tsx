"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

const gradients = [
  "linear-gradient(135deg, #8B9D77 0%, #A8B89A 50%, #D4C5B0 100%)",
  "linear-gradient(135deg, #C4704A 0%, #D4896A 50%, #E8DFD2 100%)",
  "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 50%, #C4704A 100%)",
];

function ScrollCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Each card: rotates from 8deg → 0 → -8deg as it scrolls through
  const rotateY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [12, 0, -12]);
  const rotateX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [4, 0, -2]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [60, 0, -60]);

  return (
    <div
      ref={cardRef}
      className="h-[100vh] flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          scale,
          opacity,
          y,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-[900px] mx-auto bg-bg-primary rounded-3xl p-4 md:p-6"
      >
        <Link
          href={`/work/${project.id}`}
          className="group block"
          aria-label={`View ${project.title} case study for ${project.client}`}
        >
          {/* Image area */}
          <div className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[16/10] mb-6 shadow-2xl shadow-black/10">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              style={{ background: gradients[index % gradients.length] }}
            />
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />

            {/* Counter */}
            <div className="absolute top-6 left-6">
              <span className="font-[family-name:var(--font-display)] text-6xl md:text-8xl font-light text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Category pills */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-cream/95 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] uppercase text-forest/95 border border-forest/10"
                  style={{ padding: "0.3rem 1rem" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Year */}
            <div className="absolute top-5 right-5">
              <span className="bg-cream/95 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] text-forest/95 border border-forest/10"
                style={{ padding: "0.3rem 1rem" }}>
                {project.year}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 px-2">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-fg-primary group-hover:text-terracotta transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-fg-muted text-sm mt-1">{project.category}</p>
            </div>
            <span className="text-fg-primary font-medium text-sm tracking-wider uppercase shrink-0 mt-1">
              {project.client}
            </span>
          </div>

          {/* Description */}
          <p className="text-fg-secondary text-sm md:text-base mt-3 max-w-2xl leading-relaxed px-2">
            {project.description}
          </p>
        </Link>
      </motion.div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-label="Selected work">
      <div className="container-main pt-16 md:pt-24">
        <SectionHeader label="Selected work" count={projects.length} />
      </div>

      {/* Scroll stack container — each card gets a full viewport height */}
      <div
        className="relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, i) => (
          <ScrollCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>

      <div className="container-main pb-16 md:pb-24 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-fg-primary hover:text-terracotta transition-colors duration-300 group"
        >
          <span className="text-sm font-medium tracking-wide uppercase">
            See all work
          </span>
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
