"use client";

import GlobalNav from "@/components/nav";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        exit={{ scaleY: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
