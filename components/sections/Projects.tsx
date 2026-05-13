"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaGithub } from "react-icons/fa6";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projects } from "@/lib/projects";
import { useLanguage } from "@/lib/LenguageContext";

const CARDS_PER_PAGE = 3;

export const Projects = () => {
  const { t } = useLanguage();

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(
    projects.length / CARDS_PER_PAGE
  );

  const start = page * CARDS_PER_PAGE;

  const current = projects.slice(
    start,
    start + CARDS_PER_PAGE
  );

  const prev = () =>
    setPage((p) => Math.max(p - 1, 0));

  const next = () =>
    setPage((p) =>
      Math.min(p + 1, totalPages - 1)
    );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              text-4xl md:text-5xl
              font-bold
              tracking-tight
              text-[var(--text)]
              mb-5
            "
          >
            {t.projects.title}
          </motion.h2>

          <p
            className="
              text-[var(--text-secondary)]
              text-sm md:text-base
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            {t.projects.subtitle}
          </p>
        </div>

        {/* CONTENT */}
        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous projects"
            title="Previous projects"
            className="
              absolute
              -left-5
              top-1/2
              -translate-y-1/2
              z-10

              hidden lg:flex

              items-center
              justify-center

              w-11
              h-11

              rounded-full
              bg-[var(--card)]
              border border-[var(--border)]

              text-[var(--text-secondary)]

              hover:text-[var(--primary)]
              hover:border-[var(--primary)]

              hover:shadow-lg

              transition-all duration-300

              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* PROJECTS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {current.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl

                    bg-[var(--card)]

                    border border-[var(--border)]

                    hover:border-[var(--primary)]

                    hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    dark:hover:shadow-[0_10px_35px_rgba(0,0,0,0.35)]

                    transition-all duration-300
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      w-full
                      h-52
                      overflow-hidden
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* BODY */}
                  <div className="p-6">
                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-[var(--text)]
                        mb-3
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-[var(--text-secondary)]
                        mb-5
                      "
                    >
                      {project.description}
                    </p>

                    {/* TECHS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="
                            flex items-center gap-2

                            px-3 py-1.5

                            rounded-full

                            bg-[var(--surface)]

                            border border-[var(--border)]

                            text-xs
                          "
                        >
                          <tech.icon
                            size={14}
                            style={{
                              color: tech.color,
                            }}
                          />

                          <span className="text-[var(--text-secondary)]">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* GITHUB */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center gap-2

                        text-sm
                        font-medium

                        text-[var(--text-secondary)]

                        hover:text-[var(--primary)]

                        transition-colors duration-300
                      "
                    >
                      <FaGithub size={16} />

                      {t.projects.github}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            disabled={page === totalPages - 1}
            aria-label="Next projects"
            title="Next projects"
            className="
              absolute
              -right-5
              top-1/2
              -translate-y-1/2
              z-10

              hidden lg:flex

              items-center
              justify-center

              w-11
              h-11

              rounded-full
              bg-[var(--card)]

              border border-[var(--border)]

              text-[var(--text-secondary)]

              hover:text-[var(--primary)]
              hover:border-[var(--primary)]

              hover:shadow-lg

              transition-all duration-300

              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({
            length: totalPages,
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              title={`Go to page ${i + 1}`}
              className={`
                h-2.5
                rounded-full
                transition-all duration-300

                ${
                  i === page
                    ? "w-8 bg-[var(--primary)]"
                    : "w-2.5 bg-[var(--border)] hover:bg-[var(--text-secondary)]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};