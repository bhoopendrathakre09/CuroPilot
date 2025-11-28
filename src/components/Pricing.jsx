import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "₹4,999",
    desc: "Perfect for individuals & small businesses.",
    features: ["1 Landing Page", "Basic Admin Panel", "Fast Hosting", "Email Support"],
    bg: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Advanced",
    price: "₹14,999",
    desc: "Best for growing businesses.",
    features: ["5 Pages Website", "Dashboard + Analytics", "API Integrations", "Priority Support"],
    highlight: true,
    bg: "from-indigo-600/40 to-purple-600/40"
  },
  {
    title: "Premium",
    price: "₹29,999",
    desc: "Full automation & scalability.",
    features: ["Full SaaS System", "Automation + IoT", "Custom Admin Panel", "24/7 Support"],
    bg: "from-indigo-500/20 to-purple-500/20"
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden text-white">
      
      {/* overlay illustration */}
      <div className="absolute -top-10 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-14"
        >
          Flexible Pricing Plans
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 bg-gradient-to-br ${plan.bg} backdrop-blur-xl border border-gray-700 ${
                plan.highlight ? "scale-105 shadow-2xl" : "shadow-lg"
              } transition`}
            >
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-gray-300 mt-2">{plan.desc}</p>

              <p className="text-4xl font-extrabold mt-6 mb-4">{plan.price}</p>

              <ul className="text-gray-200 space-y-2 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
