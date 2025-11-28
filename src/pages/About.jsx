// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const missionVision = [
  {
    title: "Our Mission",
    desc: "To bridge the communication gap between ambulances, hospitals, and citizens so that emergency teams prepare before the patient arrives.",
  },
  {
    title: "Our Vision",
    desc: "A healthcare system where every Golden Hour is protected because hospitals receive structured information the moment an ambulance is dispatched.",
  },
];

const pillars = [
  {
    title: "The Problem",
    desc: "Hospitals do not know the patient’s condition before arrival. Doctors receive zero context about injuries, vitals, or trauma level and start from scratch once the stretcher enters.",
  },
  {
    title: "The Impact",
    desc: "This forces critical delays — gathering doctors, preparing equipment, readying operation theatres, and calling the right specialists after the ambulance reaches. Minutes are lost when lives depend on them.",
  },
  {
    title: "The Solution",
    desc: "CuroPilot lets paramedics send real-time vitals, trauma notes, photos, and ETA directly to emergency teams so mobilisation, diagnosis, and blood arrangements begin before the patient arrives.",
  },
];

const websiteReasons = [
  "Understand real emergency challenges from citizens, paramedics, and caregivers.",
  "Gather public experiences and opinions to prioritise features that matter.",
  "Ensure CuroPilot is built on real-world problems, not assumptions.",
];

export default function About() {
  return (
    <div className="text-white bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610]">
      {/* About CuroPilot */}
      <SectionWrapper className="w-full min-h-screen py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fElUJTIwQ29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Emergency coordination"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-transparent" />
        </div>

        {/* Centered hero content */}
        <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
          <div className="max-w-5xl mx-auto text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[0.4em] text-xs text-white/70"
            >
              About CuroPilot
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-4xl md:text-5xl font-bold"
            >
              Born from real emergencies. Built for the Golden Hour.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 text-white/80"
            >
              We are student founders who saw how chaotic emergency rooms become when hospitals get zero pre-arrival
              information. CuroPilot exists to change that.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* What is CuroPilot? */}
      <SectionWrapper className="py-16 ">
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">
          What is CuroPilot?
        </p>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mt-3">A structured pre-alert for hospitals</h3>
            <p className="text-white/80 mt-4">
              Paramedics use a simple interface to capture vitals, injuries, trauma levels, and ETA. Hospitals receive a
              secure briefing that triggers workflows for specialists, blood banks, imaging, and OT readiness — long
              before the patient reaches the gate.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Built with public insight and clinician interviews",
                "Designed as software-first so it scales fast",
                "Aims to document every critical minute for accountability",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs text-cp-blue">
                    ✔
                  </span>
                  <p className="text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl border border-white/10 p-8 space-y-5">
            <h4 className="text-xl font-semibold">What we ask from you</h4>
            <p className="text-white/75">
              Share experiences, connect us to emergency professionals, or pilot the workflow in your hospital. The more
              stories we collect, the stronger the case for adoption.
            </p>
            <a
              href="/survey"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
            >
              Contribute via survey
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Our story */}
      <SectionWrapper className="py-16 ">
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">
          Our story
        </p>
        <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
              <p>
                We are student founders who witnessed first-hand how chaotic and unprepared emergency situations can be.
                In many accident and trauma cases, we saw hospitals struggling because they had no information about the
                patient before arrival. These delays — often during the critical Golden Hour — made us question why such
                an important communication gap still exists.
              </p>
              <p>
                Driven by the desire to solve this real problem, we decided to build CuroPilot — a technology-led
                solution that connects ambulances and hospitals in real time. Our goal is simple: ensure hospitals are
                prepared before the patient arrives, reduce treatment delays, and ultimately save more lives.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Founders collaborating on product strategy"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission and Vision */}
      <SectionWrapper className="py-16 ">
        <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2">
          {missionVision.map((item) => (
            <div key={item.title} className="glass p-6 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-white/80 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* From chaos to coordination */}
      <SectionWrapper className="py-16 ">
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">
          From chaos to coordination
        </p>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-white/70 mt-4">
              Every point below comes from on-ground conversations with paramedics, ER doctors, and families who lost the
              Golden Hour.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass p-6 rounded-2xl border border-white/10">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{pillar.title}</p>
                <p className="mt-4 text-white/85">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why we are creating this website */}
      <SectionWrapper className="py-16 ">
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">
          Why we are creating this website
        </p>
        <div className="max-w-5xl mx-auto px-6 glass rounded-3xl border border-white/10 p-10">
          <p className="text-white/80 mt-3">
            This project is community-first. Before building full-scale tech, we want the public mandate to prove that
            early communication tools are needed in Indian emergency care.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {websiteReasons.map((reason) => (
              <li key={reason} className="flex gap-3">
                <span className="text-cp-blue">▹</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
}
