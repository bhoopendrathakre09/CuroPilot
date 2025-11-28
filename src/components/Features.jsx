import { motion } from "framer-motion";
import { Heart, Zap, ShieldCheck, Layers } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    desc: "Optimized MERN architecture with ultra-fast load times and smooth interactions.",
    icon: <Zap className="w-10 h-10 text-indigo-400" />,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format"
  },
  {
    title: "Smart Automation",
    desc: "AI + IoT based automation to manage workflows effortlessly.",
    icon: <Layers className="w-10 h-10 text-indigo-400" />,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format"
  },
  {
    title: "Secure & Reliable",
    desc: "Built-in security layers, encrypted routes and protected APIs.",
    icon: <ShieldCheck className="w-10 h-10 text-indigo-400" />,
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format"
  },
  {
    title: "Beautiful UI",
    desc: "Modern UI/UX with proper visuals, gradients, blur backgrounds & animations.",
    icon: <Heart className="w-10 h-10 text-indigo-400" />,
    img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format"
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-gray-950 text-white overflow-hidden">
      
      {/* background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
        >
          Powerful Features for Modern Solutions
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden p-6 hover:shadow-xl hover:bg-gray-900/80 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />

              <div className="relative z-10">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
