"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/lib/tech";
import { useLanguage } from "@/lib/LenguageContext";

export const TechStack = () => {
  const { t } = useLanguage();

  return (
    // <section id="tech" className="py-20 px-6 text-center">
    //   <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">{t.tech.title}</h2>
    //   <p className="text-[var(--text-secondary)] mb-12 text-sm">{t.tech.subtitle}</p>
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
    //     {technologies.map((tech, index) => (
    //       <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.08 }} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors cursor-default">
    //         <tech.icon size={40} style={{ color: tech.color }} />
    //         <span className="text-sm text-[var(--text)]">{tech.name}</span>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
    <section id="tech" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[var(--text)]">{t.tech.title}</h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">{t.tech.subtitle}</p>
        </div>
        <div className="space-y-16">
          {techCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] whitespace-nowrap">{category.title}</h3>
                <div className="h-px w-full bg-[var(--border)] opacity-60" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ y: -5 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300"
                  >
                    <tech.icon size={30} style={{ color: tech.color }} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm font-medium text-[var(--text)]">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};