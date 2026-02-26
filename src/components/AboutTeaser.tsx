"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export function AboutTeaser() {
  return (
    <section
      className="page-section"
      id="about-teaser"
      aria-label="About preview"
    >
      <div className="container-main">
        <SectionHeader label="A bit about me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bg-secondary">
              {/* Placeholder gradient image */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #8B9D77 0%, #D4C5B0 40%, #C4704A 70%, #1A2E1A 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end" style={{ padding: "0 3rem 3.5rem 3rem" }}>
                <div className="text-white/90">
                  <p className="text-xs tracking-widest uppercase mb-1 opacity-70">
                    Daniela Amórtegui
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg italic">
                    Movement is my muse.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <blockquote className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-8 text-fg-primary">
              I love to inspire, because I know what it&#39;s like to be
              inspired.{" "}
              <span className="text-terracotta italic">
                Seeing stories land and communities grow
              </span>{" "}
              — that&#39;s what it&#39;s all about.
            </blockquote>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              I&#39;m a content strategist who lives at the intersection of
              wellness culture, athletic identity, and brand psychology. My work
              is rooted in the belief that every brand has a story worth telling
              — you just need someone who listens first.
            </p>

            <p className="text-fg-secondary text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              When I&#39;m not building content systems, you&#39;ll find me on a
              trail run, in a breathwork session, or deep in a book about
              behavioral psychology.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-fg-primary hover:text-terracotta transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                More about me
              </span>
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
