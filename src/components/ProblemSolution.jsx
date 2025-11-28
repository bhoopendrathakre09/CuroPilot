// src/components/ProblemSolution.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  const items = [
    {
      title: "The Problem",
      text: "Hospitals often receive patients without prior data — no vitals, no ETA, no case summary. This causes delays during the golden hour.",
      img: "/images/problem.jpg",
    },
    {
      title: "The Impact",
      text: "These delays lead to poor outcomes, unprepared medical teams, and reduced survival chances — especially in trauma, cardiac, and stroke cases.",
      img: "/images/impact.jpg",
    },
    {
      title: "The Solution",
      text: "CuroPilot creates a public-driven system that alerts hospitals early, shares real-time emergency insights, and improves readiness.",
      img: "/images/solution.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 grid gap-10">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`glass p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-1/2 rounded-xl h-56 object-cover shadow"
          />

          <div className="flex-1">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-white/80 mt-3">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
