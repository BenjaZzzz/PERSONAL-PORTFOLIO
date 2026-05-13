"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LenguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-[var(--primary)] opacity-20 blur-3xl rounded-full top-20 pointer-events-none" />
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold mb-4 text-[var(--text)]">
        Felix Benjamin Ogando Peguero
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-[var(--primary)] font-medium mb-4">
        {t.hero.title}
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-[var(--text-secondary)] max-w-xl mb-8 text-base leading-relaxed">
        {t.hero.description}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex gap-4 flex-wrap justify-center">
        <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[var(--primary)] px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-[var(--primary-hover)] transition-colors">
          {t.hero.cta}
        </motion.a>
        <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="border border-[var(--primary)] px-6 py-3 rounded-lg text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors">
          {t.hero.contact}
        </motion.a>
      </motion.div>
    </section>
  );
};