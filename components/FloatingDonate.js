"use client";
import { FaHeart } from "react-icons/fa";
import { motion as m } from "framer-motion";

export default function FloatingDonate() {
  return (
    <m.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      transition={{ repeat: Infinity, duration: 1 }}
      drag
      className="floating-donate-wrapper"
    >
      Donate <FaHeart />
    </m.div>
  );
}
