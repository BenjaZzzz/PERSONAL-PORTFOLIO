"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaFileArrowDown } from "react-icons/fa6";

import { useLanguage } from "@/lib/LenguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="
        relative
        h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          w-[400px]
          h-[400px]
          bg-[var(--primary)]
          opacity-20
          blur-3xl
          rounded-full
          top-20
          pointer-events-none
        "
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl
          md:text-6xl
          font-bold
          mb-4
          text-[var(--text)]
        "
      >
        Felix Benjamin Ogando Peguero
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          text-lg
          md:text-xl
          font-semibold
          mb-4
          bg-gradient-to-r
          from-[var(--primary)]
          to-blue-400
          bg-clip-text
          text-transparent
        "
      >
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "Backend Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Java & Spring Boot Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          text-[var(--text-secondary)]
          max-w-2xl
          mb-8
          text-base
          md:text-lg
          leading-relaxed
        "
      >
        {t.hero.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            bg-[var(--primary)]
            px-6
            py-3
            rounded-xl
            text-white
            font-semibold
            shadow-lg
            hover:bg-[var(--primary-hover)]
            hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
            transition-all
            duration-300
          "
        >
          {t.hero.cta}
        </motion.a>

        <motion.a
          href="/cv/Felix_Benjamin_Ogando_Peguero_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-[var(--primary)]/30
            bg-[var(--primary)]/5
            px-6
            py-3
            font-semibold
            text-[var(--primary)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:bg-[var(--primary)]/10
            hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]
          "
        >
          <FaFileArrowDown
            className="
              text-sm
              transition-transform
              duration-300
              group-hover:translate-y-[2px]
            "
          />

          <span>{t.hero.cv}</span>
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            border
            border-[var(--primary)]
            px-6
            py-3
            rounded-xl
            text-[var(--primary)]
            font-semibold
            hover:bg-[var(--primary)]
            hover:text-white
            transition-all
            duration-300
          "
        >
          {t.hero.contact}
        </motion.a>
      </motion.div>
    </section>
  );
};