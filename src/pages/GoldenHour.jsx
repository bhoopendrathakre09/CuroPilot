import SectionWrapper from "../components/SectionWrapper";
import goldenBg from "../assets/goldenhour.png";


const delayReasons = [
  {
    title: "Lack of real-time information",
    desc: "Hospitals do not know what condition the patient is in while they are on the way.",
  },
  {
    title: "Equipment and specialists not ready",
    desc: "Doctors need time to prepare because they receive details too late.",
  },
  {
    title: "Confusion and miscommunication",
    desc: "Phone calls are rushed, incomplete, and rarely structured.",
  },
  {
    title: "Overloaded emergency rooms",
    desc: "Existing cases stretch teams thin, so new emergencies wait for setup.",
  },
];

const paramedicRoles = [
  "Assessing the patient on-site and stabilising critical injuries.",
  "Capturing vitals, trauma level, and suspected complications.",
  "Alerting hospitals so teams can mobilise resources early.",
  "Sharing continuous updates en route and during handover.",
];

const earlyCommBenefits = [
  "Prep trauma surgeons, cardiologists, neurologists, and ICU staff.",
  "Ready ventilators, defibrillators, imaging, and OT suites.",
  "Arrange matching blood units before the patient arrives.",
  "Start diagnosis immediately instead of gathering history.",
  "Improve survival rates because the Golden Hour is protected.",
];

export default function GoldenHour() {
  return (
    <>
      <Helmet>
        <title>Golden Hour Intelligence | CuroPilot</title>
        <meta name="description" content="Learn how CuroPilot protects the Golden Hour by providing real-time information to hospitals and emergency teams for faster patient treatment." />
        <link rel="canonical" href="https://curopilot.com/golden-hour" />
      </Helmet>

      <div className="text-white bg-gradient-to-b from-[#030711] via-[#0a1728]/90 to-[#040610]">
        <SectionWrapper className="pt-44 w-full h-[56vh] pb-20 relative overflow-hidden ">
          <div className="absolute inset-0">
            <img
              src={goldenBg}
              alt="Ambulance in motion"
              className="w-full h-full object-cover opacity-180"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-transparent" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Golden Hour intelligence</h1>
            <p className="text-white/80 mt-4">
              The first 60 minutes after a trauma or cardiac incident decide survival. CuroPilot exists to ensure those
              minutes are used for treatment — not preparation.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">Why the Golden Hour slips away</p>
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/80 mt-4">
                When ambulances and hospitals operate in silos, teams only start preparing once the patient arrives. That
                delay is often the difference between life and death.
              </p>
              <div className="mt-6 space-y-4">
                {delayReasons.map((reason) => (
                  <div key={reason.title} className="glass p-5 rounded-2xl border border-white/10">
                    <p className="font-semibold">{reason.title}</p>
                    <p className="text-white/70 text-sm mt-2">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl border border-white/10 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1664304959928-64cf3beb7ece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBkZWF0aHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Emergency preparation"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Real stories</p>
                <p className="text-white/80 mt-3">
                  “By the time the ambulance arrived, the hospital had to call neuro, arrange blood, and prep the OT. We
                  lost 15 minutes and the patient deteriorated.”
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm md:text-xl uppercase text-left tracking-[0.4em] text-white/60 mb-10">Role of ambulances & paramedics</p>
              <ul className="mt-6 space-y-3 text-white/80">
                {paramedicRoles.map((role) => (
                  <li key={role} className="flex gap-3">
                    <span className="text-cp-blue">▹</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div>

              <p className="text-sm md:text-xl uppercase text-left tracking-[0.4em] text-white/60 mb-10">How early communication saves lives</p>
              <ul className="mt-6 space-y-3 text-white/80">
                {earlyCommBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="text-cp-blue">✔</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-16">
          <p className="text-sm md:text-xl uppercase text-center tracking-[0.4em] text-white/60 mb-10">How CuroPilot helps</p>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mt-3">Structured pre-alerts that trigger readiness</h3>
              <p className="text-white/80 mt-4">
                Paramedics submit vitals, photos, injury summaries, and ETA through a guided flow. Hospitals get a
                dashboard update, automatic notifications, and a checklist of what to prepare — all before wheels stop.
              </p>
            </div>
            <div className="glass rounded-3xl border border-white/10 p-8">
              <h4 className="text-xl font-semibold">See it in action</h4>
              <p className="text-white/75 mt-3">
                We are prototyping with emergency physicians and ambulance partners. If you’d like to join the pilot or
                share data, the survey is the fastest way to reach us.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGkkVotcqx20lT8k7sqlEi8TGp0Kwyi5oC5_OpJCYl_I5i9Q/viewform?usp=sharing&ouid=108076675494261335965"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 font-semibold"
              >
                Share your experience ↗
              </a>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}

