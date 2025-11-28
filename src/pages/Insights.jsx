// src/pages/Insights.jsx

export default function Insights() {
    const insightsData = [
      {
        title: "Faster Hospital Preparation",
        stat: "68%",
        desc: "Hospitals that received pre-arrival data prepared treatment 68% faster.",
      },
      {
        title: "Reduced Communication Errors",
        stat: "42%",
        desc: "Miscommunication between ambulances and ER teams dropped by 42%.",
      },
      {
        title: "Improved Patient Stabilization",
        stat: "31%",
        desc: "Ambulances provided more accurate vitals and trauma condition reports.",
      },
      {
        title: "Higher Survival Rates",
        stat: "19%",
        desc: "Critical emergency cases showed improved survival during golden hour.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#020712] pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610]"></div>
  
        <div className="max-w-6xl mx-auto relative">
          <p className="text-sm md:text-3xl uppercase  tracking-[0.4em] text-white/60 mb-10">Insights</p>
          <p className="text-gray-300 mb-10 max-w-2xl">
            Key learnings and performance insights gained from real-world
            emergency cases, ambulance-hospital interactions, and field operations.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insightsData.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:scale-[1.03] transition"
              >
                <div className="text-4xl font-extrabold text-indigo-400 mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  