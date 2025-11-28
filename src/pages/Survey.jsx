// src/pages/Survey.jsx
const SURVEY_FORM_URL = "https://forms.gle/vd22QhuiXxDTh3e59";

const prompts = [
  "Describe a medical emergency where minutes were lost.",
  "Share how hospitals, ambulances, or paramedics communicated (or failed to).",
  "Tell us what preparation could have changed if information arrived earlier.",
  "Mention any tools, checklists, or ideas that could bridge this gap.",
];

export default function Survey() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610] pt-32 pb-20 px-6 relative">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-black to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative glass border border-white/10 rounded-3xl p-10">
        
        <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">CuroPilot Survey</p>
        <p className="text-white/80 mt-4">
          Section 5 of our site is a listening post. We are not collecting generic feedback — we are collecting lived
          emergency experiences so hospitals and policymakers see the real communication gap.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <h2 className="text-2xl font-semibold text-white">What we want to learn</h2>
            <p className="text-white/70 mt-2">
              Tell us about road accidents, heart attacks, trauma cases, or any moment where lack of coordination cost
              time. Every detailed story strengthens the case for CuroPilot.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">Use the Google Form to share:</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              {prompts.map((prompt) => (
                <li key={prompt} className="flex gap-3">
                  <span className="text-cp-blue">▹</span>
                  {prompt}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-white/70">
            We will not build another form here — the official Google Form captures everything securely. Please click
            below to add your voice.
          </p>
        </div>

        <a
          href={SURVEY_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-white"
        >
          Open the official Google Form ↗
        </a>
      </div>
    </div>
  );
}
