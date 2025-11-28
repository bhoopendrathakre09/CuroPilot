import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, label }) => (
    <Link
      to={to}
      className="text-white/90 hover:text-white transition font-medium"
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white"
        >
          CuroPilot
        </motion.h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-10">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/golden-hour" label="Golden Hour" />
          <NavItem to="/survey" label="Survey" />
          <NavItem to="/insights" label="Insights" />
          {/* <NavItem to="/resources" label="Resources" /> */}
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-5 flex flex-col gap-4 bg-black/70 backdrop-blur-xl"
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/golden-hour" label="Golden Hour" />
          <NavItem to="/survey" label="Survey" />
          <NavItem to="/insights" label="Insights" />
          <NavItem to="/resources" label="Resources" />
          <NavItem to="/contact" label="Contact" />
        </motion.div>
      )}
    </nav>
  );
}
