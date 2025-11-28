import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohan Patil",
    role: "Founder, FoodHub",
    review:
      "The website & automation system built for our business boosted sales by 40%. Super clean UI!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Sharma",
    role: "CEO, SalonX",
    review:
      "Ultra-smooth booking system. The animations & dashboard design are unbelievably good!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Dev",
    role: "E-commerce Owner",
    review:
      "From UI to backend automation — everything is next-level. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gray-900/80"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-800/40 p-8 rounded-2xl backdrop-blur-xl border border-gray-700 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full border-2 border-indigo-400 object-cover"
                  alt={t.name}
                />
                <div>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">{t.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
