"use client";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon, Code2Icon, MoonIcon, SunIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LenguageContext";

export const Navbar = () => {
  const { locale, t, toggleLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[var(--surface)] border-b border-[var(--border)] transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2 text-[var(--text)]">
          <Code2Icon size={20} className="text-[var(--primary)]" />
          <span className="font-bold text-lg">Benjazzz</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors text-xs font-bold"
            aria-label="Toggle language"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
