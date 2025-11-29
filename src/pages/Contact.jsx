// src/pages/Contact.jsx
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);

  // --------------------------
  // EMAILJS SUBMIT HANDLER
  // --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_191ajff",        // your EmailJS service ID
        "template_rzqqrrq",       // your EmailJS template ID
        formRef.current,
        {
          publicKey: "Mks7KFekXLUzafyze", // your EmailJS public key
        }
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">
        Connect with the CuroPilot team
      </p>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=80"
          alt="Emergency control room"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 glass border border-white/10 p-10 rounded-3xl shadow-2xl"
        >
          {/* LEFT FORM: SENDS VIA EMAILJS */}
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"  // must match EmailJS variable
              placeholder="Full name"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cp-blue outline-none"
              required
            />

            <input
              type="email"
              name="from_email" // must match EmailJS variable
              placeholder="Work email"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cp-blue outline-none"
              required
            />

            <textarea
              name="message"    // must match EmailJS variable
              placeholder="Share your emergency story, hospital partnership request, or media query"
              rows="5"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cp-blue outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 font-semibold rounded-2xl transition"
            >
              Send message
            </button>
          </form>

          {/* RIGHT SIDE INFO TEXT */}
          <div className="flex flex-col justify-center space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              Hospitals, paramedics, public health teams, and citizens are
              helping us test the prototype. Reach out if you want a demo,
              have data to share, or can connect us to emergency stakeholders.
            </p>

            <div>
              <p className="font-semibold text-white">E-mail</p>
              <p className="text-white/70">curopilot.info@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold text-white">Student founder desk</p>
              <p className="text-white/70">+91 9359417537</p>
              <p className="text-white/70">+91 9423608335</p>
            </div>

            <div>
              <p className="font-semibold text-white">Based in</p>
              <p className="text-white/70">Pune, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
