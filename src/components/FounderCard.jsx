// src/components/FounderCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FounderCard({ name, role, img, story }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-50  rounded-xl object-cover shadow-lg"
      />

      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-white/70 text-sm mt-1">{role}</p>

        <p className="text-white/80 mt-4 leading-relaxed">{story}</p>
      </div>
    </motion.div>
  );
}
