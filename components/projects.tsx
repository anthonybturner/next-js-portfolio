"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>My Projects</SectionHeading>
      <p className="mb-3"> </p>
    </motion.section>
  );
}
