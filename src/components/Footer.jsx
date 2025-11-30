import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const columnLinks = [
  {
    heading: "Navigate",
    items: [
      { label: "About", to: "/about" },
      { label: "Golden Hour", to: "/golden-hour" },
      { label: "Survey", to: "/survey" },
      { label: "Insights", to: "/insights" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020307] text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-12">
        
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">CuroPilot</h4>
            <p className="text-sm text-white/70">
              A public-driven emergency communication platform that connects ambulances and hospitals in real time so
              teams are ready before the patient arrives.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:curopilot0904@gmail.com" className="hover:text-white transition">
                  curopilot.info@gmail.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/60" />
                +91 9359417537 /
                +91 9423608335
              </span>
            </div>
          </div>

          {columnLinks.map((column) => (
            <div key={column.heading}>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">{column.heading}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {column.items.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-white transition" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right text-xs text-white/60 space-y-1">
            <p>© {year} CuroPilot — early-stage emergency communication platform.</p>
            <p>Built by student founders to protect Golden Hour minutes across India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
