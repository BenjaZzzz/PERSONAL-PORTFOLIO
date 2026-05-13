"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/lib/LenguageContext";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/felix-benjamin-ogando-peguero-b807a5267/", icon: FaLinkedin },
  { label: "Email", href: "mailto:opbenjamin21@gmail.com", icon: MdEmail },
];

export const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-[var(--border)] mt-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
            <Code2 size={20} className="text-[var(--primary)]" />
            <h2 className="font-bold text-lg text-[var(--text)]">Benjazzz</h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm">{t.footer.role}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex gap-6 text-sm flex-wrap justify-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">{link.label}</a>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex gap-4">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors">
              <social.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
      <div className="text-center text-xs text-[var(--text-secondary)] pb-6">
        © {new Date().getFullYear()} Felix Ogando. {t.footer.rights}
      </div>
    </footer>
  );
};