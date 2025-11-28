// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";
import { Link } from "react-router-dom";
import doctorScrambleImg from "../assets/ambulance1.png";
import doctorScrambleImg1 from "../assets/ambulance2.png";
import doctorScrambleImg2 from "../assets/ambulance3.png";
import doctorScrambleImg3 from "../assets/ambulance4.png";



/**
 * Small animated number component (no external lib)
 */
function AnimatedNumber({ from = 0, to = 100, duration = 1500, suffix = "" }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let start = null;
    const diff = to - from;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(from + diff * progress);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);

  return (
    <span className="font-semibold text-3xl md:text-4xl">
      {value}
      {suffix}
    </span>
  );
}

/**
 * StatsCards used in "Why This Matters" section
 */
function StatsCards() {
  const stats = [
    { label: "Hospitals receiving zero pre-alerts", value: 78, suffix: "%" },
    { label: "Golden Hour cases losing time", value: 56, suffix: "%" },
    { label: "People willing to share data", value: 91, suffix: "%" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.12, duration: 0.6 }}
          className="glass p-6 rounded-2xl shadow-lg"
        >
          <div className="text-sm text-white/70">{s.label}</div>
          <div className="mt-3 flex items-end gap-3">
            <AnimatedNumber from={0} to={s.value} duration={1400} suffix={s.suffix} />
            <div className="text-xs text-white/50">pilot interviews</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const problemPoints = [
  {
    heading: "Hospitals do not know the patient’s condition before arrival.",
    body: [
      "Doctors receive patients with zero prior information about injuries, vitals, or trauma level.",
      "They have to start from scratch the moment the patient enters — wasting crucial time.",
    ],
  },
  {
    heading: "This leads to delays in diagnosis and treatment.",
    body: [
      "Because the hospital is unprepared, the emergency team needs time to:",
      "• Gather doctors",
      "• Prepare equipment",
      "• Ready the operation theatre",
      "• Identify required specialists",
      "This delay can be the difference between life and death.",
    ],
  },
  {
    heading: "Ambulance–hospital communication is broken.",
    body: [
      "Paramedics often cannot send real-time patient details to the hospital.",
      "Phone calls are slow, unclear, and unreliable.",
      "There is no structured system for urgent information transfer.",
    ],
  },
  {
    heading: "Golden Hour is lost.",
    body: [
      "The Golden Hour is the first 60 minutes after a major trauma.",
      "If treatment begins within this hour, the chances of survival increase dramatically.",
      "But delays cause precious Golden Hour minutes to slip away.",
    ],
  },
];

const problemImages = [
  {
    src: doctorScrambleImg1,
    caption: "Ambulance teams often arrive before hospitals have any context.",
  },
  {
    src: doctorScrambleImg,
    caption: "Doctors scramble to prepare OTs, blood units, and specialists after arrival.",
  },
  {
    src: doctorScrambleImg2,
    caption: "Phone calls are not enough — structured data is missing.",
  },
  {
    src: doctorScrambleImg3,
    caption: "Golden Hour minutes slip while teams gather information.",
  },
];

const scenarios = [
  {
    title: "Road accidents",
    desc: "Victims with internal bleeding need immediate attention, but hospitals often don’t know the severity until the ambulance arrives.",
  },
  {
    title: "Heart attacks",
    desc: "Patients need emergency ECGs, cardiologist preparedness, and immediate intervention — delays reduce survival chances.",
  },
  {
    title: "Head injuries & trauma",
    desc: "Neurosurgeons, CT scans, and trauma teams must be arranged before the patient reaches the hospital.",
  },
  {
    title: "Severe bleeding cases",
    desc: "Hospitals must arrange blood units early, but they only learn the requirement after arrival.",
  },
];


/**
 * Timeline: visual storytelling steps
 */
function Timeline() {
  const steps = [
    {
      title: "Incident",
      desc: "Accident, cardiac arrest, or trauma occurs — the clock starts.",
      icon: "🚨",
    },
    {
      title: "Paramedics assess",
      desc: "Vitals, injuries, and first aid are recorded inside the ambulance.",
      icon: "🚑",
    },
    {
      title: "CuroPilot push",
      desc: "Structured case summary, vitals, and ETA reach the hospital instantly.",
      icon: "📡",
    },
    {
      title: "Prepared hospital",
      desc: "Operation theatre, specialists, and blood units are ready before arrival.",
      icon: "🏥",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">How CuroPilot fits into emergency minutes</p>
        <p className="text-white/80 mt-3 max-w-2xl mx-auto">
          CuroPilot injects critical information between the ambulance and the ER so that the Golden Hour is protected.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.12, duration: 0.6 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-cp-blue to-cp-red text-white text-xl shadow">
              {s.icon}
            </div>
            <h4 className="text-white font-semibold mt-4">{s.title}</h4>
            <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Testimonial card (small stories)
 */
function TestimonialCard({ quote, name, role, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass p-6 rounded-xl"
    >
      <div className="flex items-start gap-4">
        <img
          src={img || "/images/testimonial-1.jpg"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover shadow"
        />
        <div>
          <p className="text-white/80">“{quote}”</p>
          <div className="mt-3 text-sm text-white/70">
            {name} — <span className="italic">{role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Home Page main component
 */
export default function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610]">
      <Hero />

      {/* Problem Explanation */}
      <SectionWrapper id="problem" className="py-16 relative">
      <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">What is the problem?</p>
      <p className="text-white/80 mt-4 max-w-3xl text-center mx-auto">
              When a medical emergency happens, every minute matters. Yet most hospitals start from zero because they
              receive patients with no prior information.
            </p>
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504814532849-cffc114e7213?auto=format&fit=crop&w=1600&q=80"
            alt="Emergency corridor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#040610] via-[#0d1526]/80 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
           
            <div className="mt-6 space-y-5">
              {problemPoints.map((item) => (
                <div key={item.heading} className="glass p-5 rounded-2xl border border-white/10">
                  <h4 className="font-semibold text-lg">{item.heading}</h4>
                  <div className="mt-2 space-y-2">
                    {item.body.map((line) => (
                      <p key={line} className="text-sm text-white/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
            

          <div className="grid gap-6 mt-10">
            {problemImages.map((item) => (
              <div key={item.src} className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <img src={item.src} alt={item.caption} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm uppercase tracking-widest text-white/70">Case Insight</p>
                  <p className="text-sm font-semibold max-w-xs">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="mt-8 w-full flex gap-4 flex-wrap items-center justify-center relative z-20">

  {/* GOOGLE FORM BUTTON */}
  <a
    href="https://forms.gle/vd22QhuiXxDTh3e59"
    target="_blank"
    rel="noreferrer"
    className="inline-block px-6 py-3 rounded-xl bg-cp-red hover:brightness-105 transition font-semibold cursor-pointer select-none text-center"
  >
    Share your experience
  </a>

  {/* INTERNAL ROUTE BUTTON */}
  <Link
    to="/golden-hour"
    className="inline-block px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition font-semibold cursor-pointer select-none text-center"
  >
    Understand the Golden Hour
  </Link>

</div>

      </SectionWrapper>

      {/* Why this matters */}
      <SectionWrapper className="py-16 ">
      <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">Why this matters</p>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-white/80 mt-3 max-w-2xl mx-auto">
              Every day, people face emergencies where a few minutes decide everything. When hospitals are unprepared,
              precious time is lost — and patients suffer the consequences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="glass p-5 rounded-2xl border border-white/10">
                <h4 className="text-xl font-semibold">{scenario.title}</h4>
                <p className="text-sm text-white/80 mt-2">{scenario.desc}</p>
              </div>
            ))}
          </div>

          <StatsCards />
        </div>
      </SectionWrapper>

      {/* Timeline / Story */}
      <SectionWrapper className="">
        <Timeline />
      </SectionWrapper>

      {/* Section 5 Survey */}
      <SectionWrapper id="survey" className="py-16 ">
      
        <div className="max-w-5xl mx-auto px-6 text-center glass rounded-3xl p-10 border border-white/10">
          <p className="text-white/80 mt-4">
          <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">Help us with 2 minutes of your time</p>
            Section 5 introduces the survey. Share an emergency where time was lost, confusion took over, or the Golden
            Hour slipped away. Your story gives us the data to prove why CuroPilot must exist.
          </p>
          <a
            href="https://forms.gle/vd22QhuiXxDTh3e59"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
          >
            Go to the Google Form ↗
          </a>
        </div>
      </SectionWrapper>

      {/* Testimonials / stories */}
      <SectionWrapper className="py-16 ">
      <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">Voices from the field</p>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            
            <p className="text-white/80 mt-3">Anonymous stories that reveal how delays cost minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="We arrived with a head injury patient, but it still took 12 minutes for neuro to be called. A pre-alert could have saved that time."
              name="Emergency Resident"
              role="Tier-1 Trauma Center"
              img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
            />
            <TestimonialCard
              quote="Ambulance teams are on the phone while treating the patient. A single structured app will change how we work."
              name="Paramedic Lead"
              role="Private Ambulance Network"
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
            />
            <TestimonialCard
              quote="We lost the Golden Hour because everyone was scrambling for blood. If they knew earlier, prep could have finished."
              name="Caregiver"
              role="Road Accident Survivor’s Family"
              img="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section 8 */}
      <SectionWrapper className="py-16 ">
      <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">Let’s build CuroPilot with the people who need it most</p>
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl p-10 bg-linear-to-r from-cp-blue/80 to-cp-red/80 shadow-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between border border-white/10">
            <div className="max-w-2xl">
              <p className="text-white/80 mt-3">
                Share your story, connect us to hospitals, or help us test. Removing pricing keeps the focus on the
                life-saving mission — this stage is about research, not monetisation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-3 rounded-2xl border border-white/40 text-white text-center hover:bg-white/10">
                Send Message              </Link>
              <Link to="/survey" className="px-8 py-3 rounded-2xl border border-white/40 text-white text-center hover:bg-white/10">
                Submit survey
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
