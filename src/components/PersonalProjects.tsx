"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalProjects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof personalProjects)[0];
  index: number;
}) {
  return (
    <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 h-full flex items-center">
      <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden group cursor-default">
        {/* Background: image if provided, else gradient */}
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: project.gradient }} />
          )}
        </div>

        {/* Subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        {/* Strong bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-40% to-transparent" />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Counter — top left */}
        <div className="absolute top-8 left-8 md:top-10 md:left-10">
          <span className="font-display text-7xl md:text-9xl font-light text-white/10">
            {/* {String(index + 1).padStart(2, "0")} */}
          </span>
        </div>

        {/* Tags — top right */}
        {/* <div className="absolute top-8 right-8 md:top-10 md:right-10 flex flex-wrap gap-2 justify-end max-w-50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-cream/90 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.15em] uppercase text-forest/95 border border-forest/10"
              style={{ padding: "0.3rem 1rem" }}
            >
              {tag}
            </span>
          ))}
        </div> */}

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "0 2.5rem 3.5rem 2.5rem" }}
        >
          {/* Tagline */}
          <p className="text-white/50 text-xs md:text-sm uppercase tracking-widest mb-3">
            {project.tagline}
          </p>

          {/* Title */}
          <h3 className="font-display text-3xl md:text-5xl font-medium text-white mb-4 leading-[1.1]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PersonalProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll (0→1) to horizontal translation
  // We need to move from 0 to -(totalWidth - viewportWidth)
  // With 3 cards at ~45vw each + gaps, roughly 135vw - 100vw = 35vw of overflow
  // We'll use percentage of the container
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  // Subtle parallax for header
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary"
      style={{ height: "300vh" }}
      id="personal-projects"
      aria-label="Proyectos personales"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header — pinned at top, fades out */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="pt-10 md:pt-14 px-8 md:px-16 pb-4"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-fg-muted text-xs tracking-[0.2em] uppercase font-medium">
              Proyectos personales
            </span>
            <span className="h-px flex-1 bg-stone/30" />
            <span className="text-fg-muted text-xs tracking-wider font-mono">
              {String(personalProjects.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <div className="flex-1 flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-10 pl-8 md:pl-16 pr-8 md:pr-16"
          >
            {personalProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="pb-8 px-8 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-fg-muted text-[10px] tracking-[0.2em] uppercase">
              Scroll para explorar
            </span>
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-fg-muted text-sm"
            >
              →
            </motion.span>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2">
            {personalProjects.map((_, i) => {
              const dotStart = i / personalProjects.length;
              const dotEnd = (i + 1) / personalProjects.length;
              return (
                <ProgressDot
                  key={i}
                  scrollYProgress={scrollYProgress}
                  rangeStart={dotStart}
                  rangeEnd={dotEnd}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  scrollYProgress,
  rangeStart,
  rangeEnd,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  rangeStart: number;
  rangeEnd: number;
}) {
  const width = useTransform(
    scrollYProgress,
    [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
    [8, 24, 24, 8]
  );
  const opacity = useTransform(
    scrollYProgress,
    [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-2 rounded-full bg-terracotta"
    />
  );
}
