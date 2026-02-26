"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/data";

export function CaseStudyClient({ project }: { project: Project }) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <article className="page-section">
        <div className="container-main">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-fg-muted hover:text-fg-primary transition-colors duration-300 text-sm"
            >
              <span>←</span>
              <span className="tracking-wide uppercase">All work</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-fg-primary font-medium text-sm tracking-wider uppercase">
                {project.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-fg-muted" />
              <span className="text-fg-muted text-sm">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-fg-muted" />
              <span className="text-fg-muted text-sm">{project.year}</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-stone/30 rounded-full text-xs font-medium text-fg-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl bg-bg-secondary aspect-[16/9] mb-16 md:mb-20"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #8B9D77 0%, #A8B89A 30%, #D4C5B0 60%, #C4704A 100%)",
              }}
            />
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="section-label mb-3">Role</h3>
                  <p className="text-fg-primary text-sm">
                    Content Strategy, Brand Voice, Editorial Direction
                  </p>
                </div>
                <div>
                  <h3 className="section-label mb-3">Timeline</h3>
                  <p className="text-fg-primary text-sm">
                    {project.year} · 4 months
                  </p>
                </div>
                <div>
                  <h3 className="section-label mb-3">Deliverables</h3>
                  <ul className="space-y-1.5">
                    {[
                      "Brand Voice Guidelines",
                      "Content Pillars Framework",
                      "Editorial Calendar",
                      "Campaign Narratives",
                      "Performance Reporting",
                    ].map((d) => (
                      <li key={d} className="text-fg-primary text-sm">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.aside>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-8"
            >
              <div className="space-y-12">
                {/* Challenge */}
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-4">
                    The Challenge
                  </h2>
                  <p className="text-fg-secondary text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-4">
                    The Approach
                  </h2>
                  <p className="text-fg-secondary text-base md:text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Process images placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-xl bg-bg-secondary overflow-hidden">
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4C5B0 0%, #8B9D77 100%)",
                      }}
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-bg-secondary overflow-hidden">
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #C4704A 0%, #D4C5B0 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Results */}
                {project.results && (
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-6">
                      The Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.results.map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="p-5 rounded-xl border border-sage/20 bg-sage/5"
                        >
                          <p className="text-fg-primary text-sm font-medium leading-relaxed">
                            {result}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reflection */}
                <div className="border-l-2 border-terracotta/40 pl-6 py-2">
                  <p className="font-[family-name:var(--font-display)] text-lg md:text-xl italic text-fg-primary leading-relaxed">
                    &ldquo;This project reminded me that great content
                    doesn&#39;t just serve the brand — it serves the people the
                    brand exists for.&rdquo;
                  </p>
                  <p className="text-fg-muted text-sm mt-3">
                    — Daniela, reflecting on this project
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation to other projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 md:mt-28 pt-12 border-t border-stone/20 flex justify-between items-center"
          >
            <Link
              href="/work"
              className="text-fg-secondary hover:text-fg-primary transition-colors text-sm tracking-wide uppercase"
            >
              ← All projects
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-fg-primary hover:text-terracotta transition-colors text-sm tracking-wide uppercase"
            >
              Next project →
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
