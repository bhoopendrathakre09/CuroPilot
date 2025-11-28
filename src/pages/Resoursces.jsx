// src/pages/Resources.jsx

export default function Resources() {
    const resources = [
      {
        title: "Emergency Response Guidebook",
        link: "#",
        desc: "Best practices for ambulance teams & trauma emergency responders.",
      },
      {
        title: "Hospital ER Preparedness Checklist",
        link: "#",
        desc: "A complete guide to preparing for incoming critical patients.",
      },
      {
        title: "Golden Hour Protocol",
        link: "#",
        desc: "Evidence-based medical procedures to reduce fatality rates.",
      },
      {
        title: "Paramedic Quick Assessment Sheet",
        link: "#",
        desc: "A fast breakdown of trauma, vitals, and critical conditions.",
      },
      {
        title: "CuroPilot Technical Documentation",
        link: "#",
        desc: "System architecture, modules, communication design & APIs.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#020712] pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
  
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm md:text-3xl uppercase  tracking-[0.4em] text-white/60 mb-10">Resources</p>
          <p className="text-gray-300 mb-10">
            Useful documents, medical protocols, technical references, and
            emergency response knowledge.
          </p>
  
          <div className="grid gap-6">
            {resources.map((res, idx) => (
              <a
                key={idx}
                href={res.link}
                className="block p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/10 hover:scale-[1.01] transition"
              >
                <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                  {res.title}
                </h3>
                <p className="text-gray-300 text-sm">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  