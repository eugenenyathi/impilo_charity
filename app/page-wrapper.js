"use client";
import Footer from "@/components/Footer";
import { motion as m, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <m.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
        >
          {children}
        </m.section>
      </AnimatePresence>
    </>
  );
}
