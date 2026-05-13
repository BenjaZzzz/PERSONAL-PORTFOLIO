"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "./animations";

interface Props {
  children: ReactNode;
}

export const AnimatedSection = ({ children }: Props) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};