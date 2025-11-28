import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=80"
          alt="Emergency team"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-[#0a101a]"></div>
        <div className="absolute inset-0 radial-grid opacity-40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs text-white/70"
        >
          Bridging ambulances & hospitals
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-4xl md:text-6xl font-black leading-tight"
        >
          Every minute matters.<br />
          <span className="text-cp-blue">CuroPilot</span> protects the Golden Hour.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg text-white/80 max-w-3xl mx-auto"
        >
          A real-time emergency communication system that gives hospitals advance visibility into a patient’s
          condition, injury type, vitals, and arrival time so trauma teams can prepare before the ambulance
          reaches the gate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#survey"
            className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 transition rounded-xl text-white font-semibold shadow-lg"
          >
            Share your emergency story
          </a>
          <Link
            to="/golden-hour"
            className="px-8 py-4 border border-white/20 hover:border-white/60 transition rounded-xl text-white font-semibold"
          >
            Learn why delays occur
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="glow absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/40 blur-[140px] rounded-full pointer-events-none"
        />
      </div>
    </div>
  );
}

