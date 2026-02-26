"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";

export function WorkPageClient() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <section className="page-section">
        <div className="container-main">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
              Selected work
            </h1>
            <p className="text-fg-secondary text-base md:text-lg max-w-xl">
              A curated collection of content strategy, brand narrative, and
              editorial projects — each one designed to move audiences and grow
              brands.
            </p>
          </motion.div>

          {/* Project list — full size */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/work/${project.id}`}
                  className="group block"
                  aria-label={`View ${project.title} case study`}
                >
                  {/* Large image */}
                  <div className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[16/9] mb-8">
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #8B9D77 0%, #A8B89A 30%, #D4C5B0 60%, #FAF7F2 100%)"
                            : i === 1
                            ? "linear-gradient(135deg, #C4704A 0%, #D4896A 30%, #E8DFD2 60%, #FAF7F2 100%)"
                            : "linear-gradient(135deg, #1A2E1A 0%, #8B9D77 30%, #C4704A 60%, #D4C5B0 100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />

                    {/* Year badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-bg-primary/80 backdrop-blur-sm rounded-full text-xs font-medium text-fg-secondary">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-fg-primary font-medium text-sm tracking-wider uppercase">
                          {project.client}
                        </span>
                        <span className="text-fg-muted text-sm">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-medium text-fg-primary group-hover:text-terracotta transition-colors duration-300">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-fg-secondary text-sm md:text-base max-w-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-stone/30 rounded-full text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
