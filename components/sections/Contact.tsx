"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/lib/LenguageContext";

interface FormData { name: string; email: string; message: string; }

export const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); setSuccess(false);
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) return t.contact.validation;
    if (!/\S+@\S+\.\S+/.test(form.email)) return t.contact.invalidEmail;
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.contact.error);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t.contact.error);
    } finally { setLoading(false); }
  };

  useEffect(() => { if (error) { const timer = setTimeout(() => setError(""), 3000); return () => clearTimeout(timer); } }, [error]);
  useEffect(() => { if (success) { const timer = setTimeout(() => setSuccess(false), 3000); return () => clearTimeout(timer); } }, [success]);

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text)]">{t.contact.title}</h2>
      <p className="text-[var(--text-secondary)] text-center mb-10">{t.contact.subtitle}</p>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[var(--card)] border border-[var(--border)] p-6 rounded-2xl space-y-6 shadow-lg">
        <input type="text" name="name" placeholder={t.contact.name} value={form.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--text)]" />
        <input type="email" name="email" placeholder={t.contact.email} value={form.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--text)]" />
        <textarea name="message" placeholder={t.contact.message} value={form.message} onChange={handleChange} rows={5} className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--text)]" />
        <AnimatePresence mode="wait">
          {error && <motion.p key="error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-sm text-center">{error}</motion.p>}
          {success && !error && <motion.p key="success" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-green-500 text-sm text-center">{t.contact.success}</motion.p>}
        </AnimatePresence>
        <motion.button whileHover={{ scale: loading ? 1 : 1.03 }} whileTap={{ scale: loading ? 1 : 0.97 }} disabled={loading} className="w-full bg-[var(--primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50">
          {loading ? t.contact.sending : t.contact.send}
        </motion.button>
      </motion.form>
      <div className="text-center mt-8 text-sm text-[var(--text-secondary)]">
        {t.contact.direct}
        <div className="flex justify-center gap-6 mt-3">
          <a href="mailto:opbenjamin21@gmail.com" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"><MdEmail size={18} />Email</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"><FaGithub size={18} />GitHub</a>
          <a href="https://www.linkedin.com/in/felix-benjamin-ogando-peguero-b807a5267/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"><FaLinkedin size={18} />LinkedIn</a>
        </div>
      </div>
    </section>
  );
};