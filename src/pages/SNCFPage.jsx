import { Link } from 'react-router-dom'

const outcomes = [
  { metric: '+15pts', label: 'Conversion rate (visitor → booking) in 5 months' },
  { metric: '#1', label: "BlaBlaCar's top passenger acquisition partner by volume" },
  { metric: '10%+', label: 'Of BlaBlaCar Bus sales driven through the partnership' },
]

const phases = [
  {
    goal: 'Optimize',
    duration: 'Months 1-3',
    title: 'Integration Optimization',
    strategy: 'A basic integration already existed: 3 carpool placements in the bus flow, triggered only when no train was available. We redesigned the logic and matching criteria - expanded radius (5% → 15%), removed auto-acceptance requirement, injected top carpool cities into search, and broadened triggers beyond the no-train scenario.',
    actions: ['Matching criteria redesign', 'CVR as north star metric', 'Trigger logic broadened', 'Placement performance analysis'],
  },
  {
    goal: 'Scale',
    duration: 'Months 4-6',
    title: 'Dedicated Tab',
    strategy: 'Strong Phase 1 performance unlocked a commercial negotiation. Result: a dedicated "Bus or Carpool" tab within SNCF search - surfacing all relevant carpool offers at the same level as bus results, regardless of train availability.',
    actions: ['Commercial negotiation with SNCF', 'Tab positioning & UX specs', 'Offer ranking definition', 'Launch performance tracking'],
  },
  {
    goal: 'Expand',
    duration: 'Months 7+',
    title: 'Multimodal Exploration',
    strategy: 'Work on end-to-end multimodal journeys: combined offers bookable in a single flow via API integration between BlaBlaCar and Oui.SNCF. Combinations explored: Train + Carpool, Car + Train, Train + Car + Carpool.',
    actions: ['API specs with product & engineering', 'Cross-platform booking flow design', 'Multimodal pricing logic', 'Joint roadmap with SNCF product team'],
  },
]

export default function SNCFPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-bold text-stone-900 tracking-tight">Apolline Aurenche - Portfolio</span>
          <Link
            to="/#work"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All case studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">BlaBlaCar</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Partnership</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Product Integration</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">B2C</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4">
            SNCF × BlaBlaCar
          </h1>
          <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
            Scaling SNCF partnership - from a basic integration to BlaBlaCar's top passenger acquisition partner.
          </p>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-6 mt-10">
            {outcomes.map((o) => (
              <div key={o.metric}>
                <div className="text-3xl font-bold text-teal-600">{o.metric}</div>
                <div className="text-xs text-stone-400 max-w-[160px] leading-snug mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Business Problem</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Grow the passenger base and reduce CAC by scaling a high-potential existing integration - turning SNCF into our top passenger acquisition partner.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Validate a multimodality thesis: could bus, train and carpool be complementary rather than competing?
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Strategic Insights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                SNCF users are already high-intent travelers - strategic opportunity to intercept them at the right moment with a relevant carpool or bus offer.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Carpool and bus also cover routes and last-mile gaps the train doesn't serve.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Role + Positioning */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">My Role</h2>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2"><span className="text-teal-500">·</span> Budget management and performance tracking</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Partnership governance - preparation and follow-up of negotiations with the Business Development team</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Product roadmap co-definition with internal and SNCF product teams</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Marketing plan ownership - defining moments to cover, routes to prioritize and content to push (banners, landing pages, redirections), then tracking implementation and performance with SNCF</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Positioning</h2>
            <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6">
              "The right journey, the right moment, the right mode of transport."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Artifact */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Product Integration Framework</h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              From optimizing an existing 3-placement integration to a dedicated tab - each phase unlocked the next.
            </p>
          </div>

          {/* Unified phase + actions table */}
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((p, i) => (
              <div key={p.title} className="border border-stone-200 rounded-2xl p-6 hover:border-teal-200 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">Phase {i + 1}</span>
                  <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">{p.goal}</span>
                </div>
                <div className="mb-1">
                  <div className="font-semibold text-stone-900 text-sm">{p.title}</div>
                  <div className="text-xs text-stone-400 mb-3">{p.duration}</div>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed flex-1 mb-4 pb-4 border-b border-stone-100">{p.strategy}</p>
                <ul className="space-y-1.5">
                  {p.actions.map((a) => (
                    <li key={a} className="flex gap-2 text-xs text-stone-500">
                      <span className="text-teal-500 flex-shrink-0">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Before / After schema */}
          <div className="mt-12 mb-12">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-1">Integration - Differences Phase 1 to 2</h3>
            <p className="text-xs text-stone-400 italic mb-6">Simulated example - illustrative content</p>
            <div className="flex flex-col md:flex-row gap-6">
              {/* BEFORE */}
              <div className="flex-1 bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-stone-100">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Phase 1 - Before</span>
                </div>
                <div className="flex border-b border-stone-100">
                  <div className="flex-1 py-2.5 text-center text-xs text-stone-400 font-medium">🚆 Train</div>
                  <div className="flex-1 py-2.5 text-center text-xs text-stone-700 font-semibold border-b-2 border-stone-700">🚌 Bus</div>
                </div>
                <div className="p-4 space-y-2">
                  {[['05:15 → 08:15','Bus · Eurolines · 3h','14€'],['06:30 → 09:30','Bus · Ouibus · 3h','19€']].map(([t,s,p]) => (
                    <div key={t} className="bg-stone-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
                      <div><div className="text-xs font-semibold text-stone-800">{t}</div><div className="text-xs text-stone-400">{s}</div></div>
                      <div className="text-xs font-bold text-stone-800">{p}</div>
                    </div>
                  ))}
                  <div className="text-xs text-stone-400 font-semibold pt-1">Carpool rides (BlaBlaCar)</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[['17:00→20:00','17€'],['00:30→03:00','18€'],['13:50→16:50','21€']].map(([t,p]) => (
                      <div key={t} className="bg-teal-50 border border-teal-100 rounded-lg p-2 text-center">
                        <div className="text-xs font-semibold text-teal-700">{t}</div>
                        <div className="text-xs font-bold text-stone-800 mt-1">{p}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-stone-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
                    <div><div className="text-xs font-semibold text-stone-800">07:15 → 10:05</div><div className="text-xs text-stone-400">Bus · Ouibus · 2h50</div></div>
                    <div className="text-xs font-bold text-stone-800">15€</div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="bg-amber-50 rounded-lg px-3 py-2 text-xs text-amber-700 font-medium">⚠️ Carpool buried between bus results - limited visibility, max 3 options, non-optimised selection</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">→</div>
              </div>

              {/* AFTER */}
              <div className="flex-1 bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-stone-100">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Phase 2 - After</span>
                </div>
                <div className="flex border-b border-stone-100">
                  <div className="flex-1 py-2.5 text-center text-xs text-stone-400 font-medium">🚆 Train</div>
                  <div className="flex-1 py-2.5 text-center text-xs text-teal-700 font-semibold border-b-2 border-teal-500">🚌 Bus or Carpool</div>
                </div>
                <div className="p-4 space-y-2">
                  {[
                    ["19:30 → 22:00","BlaBlaCar · 2h31 · Direct","19,49€", true],
                    ["19:35 → 22:50","BlaBlaBus · 3h15 · Direct","34,99€", false],
                    ["19:50 → 22:20","BlaBlaCar · 2h29 · Direct","20,79€", true],
                    ["20:00 → 22:20","BlaBlaCar · 2h17 · Direct","16,89€", true],
                  ].map(([t,s,p,isCarpool]) => (
                    <div key={t} className={`rounded-lg px-3 py-2.5 flex justify-between items-center border ${isCarpool ? 'bg-teal-50 border-teal-100' : 'bg-stone-50 border-stone-100'}`}>
                      <div>
                        <div className="text-xs font-semibold text-stone-800">{t}</div>
                        <div className={`text-xs ${isCarpool ? 'text-teal-600' : 'text-stone-400'}`}>{s}</div>
                      </div>
                      <div className="text-xs font-bold text-stone-800">{p}</div>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <div className="bg-teal-50 rounded-lg px-3 py-2 text-xs text-teal-700 font-medium">✓ Dedicated tab with buses - all available carpool offers highlighted, same level as train</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Plan */}
          <div className="mt-4 bg-stone-50 rounded-2xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Marketing Plan</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              In parallel, an annual budget was negotiated with SNCF to maintain a consistent presence on their platform throughout the year. Planning was done upfront - defining the moments to cover, the routes to prioritize, and the content to push - then implementation and performance tracking were run jointly with SNCF teams.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  label: 'Seasonality',
                  detail: 'Spend concentrated on French travel peaks - Christmas, summer departures, school holidays - where demand was highest and train alternatives weakest.',
                },
                {
                  label: 'Route selection',
                  detail: 'Priority on O-D pairs with limited train frequency or high prices - where carpool and bus offered a real competitive alternative.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-stone-100">
                  <div className="text-sm font-semibold text-stone-900 mb-2">{item.label}</div>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-teal-500 bg-teal-50 rounded-r-2xl px-8 py-6 flex flex-col md:flex-row md:items-start gap-4">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase whitespace-nowrap pt-0.5 min-w-[100px]">Key Insight</span>
            <p className="text-stone-700 text-sm leading-relaxed">
              The effort you put into growing a partnership post-launch matters as much as building it - joint marketing, shared roadmap, continuous optimization. And the data proves it here: Phase 1 performance unlocked Phase 2. It turned a basic placement into BlaBlaCar's top passenger acquisition partner, and SNCF from a distributor into a genuine ally.
            </p>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-16 px-6 border-t border-stone-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/#work"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all case studies
          </Link>
          <a
            href="mailto:apollineaurenche@gmail.com"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}
