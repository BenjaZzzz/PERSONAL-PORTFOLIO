"use client";

import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/lib/LenguageContext";

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stats.projects, value: "5+" },
    { label: t.about.stats.technologies, value: "8+" },
    { label: t.about.stats.years, value: "3+" },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-center mb-16 text-[var(--text)]">
        {t.about.title}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
          <p className="text-[var(--text-secondary)] leading-relaxed">{t.about.p1}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed">{t.about.p2}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed">{t.about.p3}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-[var(--primary)]">{stat.value}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <FaJava size={24} className="text-[#f89820]" />
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">{t.about.cards.backend}</p>
                <p className="text-xs text-[var(--text-secondary)]">{t.about.cards.backendSub}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <SiSpringboot size={24} className="text-[#6db33f]" />
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">{t.about.cards.architecture}</p>
                <p className="text-xs text-[var(--text-secondary)]">{t.about.cards.architectureSub}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <Code2 size={24} className="text-[var(--primary)]" />
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">{t.about.cards.fullstack}</p>
                <p className="text-xs text-[var(--text-secondary)]">{t.about.cards.fullstackSub}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};